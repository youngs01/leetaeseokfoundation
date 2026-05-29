'use client';

import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { LoaderCircle } from 'lucide-react';

interface ContentItemForm {
  id?: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  featured?: boolean;
  // Type-specific fields
  location?: string;
  speaker?: string;
  source?: string;
  url?: string;
  youtube_id?: string;
  duration?: number;
  author?: string;
  publisher?: string;
  published_date?: string;
  release_date?: string;
  runtime?: number;
  director?: string;
  letter_type?: string;
}

interface ContentEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contentType: string;
  item: any | null;
  onSave: () => void;
}

const TYPE_FIELDS: Record<string, string[]> = {
  foundation: [],
  lecture: ['location', 'speaker'],
  press: ['source', 'url'],
  video: ['youtube_id', 'duration'],
  gallery: [],
  book: ['author', 'publisher', 'published_date'],
  movie: ['director', 'publisher', 'release_date', 'runtime'],
  letter: ['author', 'letter_type'],
};

export function ContentEditDialog({
  open,
  onOpenChange,
  contentType,
  item,
  onSave,
}: ContentEditDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { control, register, handleSubmit, reset, watch } = useForm<ContentItemForm>({
    defaultValues: item || {
      title: '',
      summary: '',
      content: '',
      image: '',
      date: new Date().toISOString().split('T')[0],
      featured: false,
    },
  });

  // Reset form when item changes
  useEffect(() => {
    if (open) {
      reset(item || {
        title: '',
        summary: '',
        content: '',
        image: '',
        date: new Date().toISOString().split('T')[0],
        featured: false,
      });
    }
  }, [open, item, reset]);

  const typeFields = TYPE_FIELDS[contentType] || [];
  const isCreating = !item;

  async function onSubmit(data: ContentItemForm) {
    setIsSubmitting(true);
    setError(null);

    try {
      const url = item
        ? `/api/admin/content/${contentType}/${item.id}`
        : `/api/admin/content/${contentType}`;

      const method = item ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || '저장에 실패했습니다');
      }

      onOpenChange(false);
      onSave();
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isCreating ? `새 ${contentType} 콘텐츠 생성` : '콘텐츠 수정'}
          </DialogTitle>
          <DialogDescription>
            필수 항목을 작성해주세요
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <Label htmlFor="title" className="text-sm font-medium">
              제목 *
            </Label>
            <Input
              id="title"
              placeholder="콘텐츠 제목"
              {...register('title', { required: true })}
              className="mt-1"
            />
          </div>

          {/* Summary */}
          <div>
            <Label htmlFor="summary" className="text-sm font-medium">
              요약 *
            </Label>
            <Textarea
              id="summary"
              placeholder="콘텐츠 요약"
              {...register('summary', { required: true })}
              rows={2}
              className="mt-1"
            />
          </div>

          {/* Content */}
          <div>
            <Label htmlFor="content" className="text-sm font-medium">
              본문 *
            </Label>
            <Textarea
              id="content"
              placeholder="콘텐츠 본문 (HTML 지원)"
              {...register('content', { required: true })}
              rows={4}
              className="mt-1 font-mono text-xs"
            />
          </div>

          {/* Image URL */}
          <div>
            <Label htmlFor="image" className="text-sm font-medium">
              이미지 URL
            </Label>
            <Input
              id="image"
              placeholder="https://example.com/image.jpg"
              {...register('image')}
              className="mt-1"
            />
          </div>

          {/* Date */}
          <div>
            <Label htmlFor="date" className="text-sm font-medium">
              날짜
            </Label>
            <Input
              id="date"
              type="date"
              {...register('date')}
              className="mt-1"
            />
          </div>

          {/* Featured */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="featured"
              {...register('featured')}
              defaultChecked={item?.featured}
            />
            <Label htmlFor="featured" className="text-sm font-medium cursor-pointer">
              대표 콘텐츠로 표시
            </Label>
          </div>

          {/* Type-specific fields */}
          {typeFields.map(field => (
            <div key={field}>
              <Label htmlFor={field} className="text-sm font-medium capitalize">
                {getFieldLabel(field)}
              </Label>
              {field === 'duration' || field === 'runtime' ? (
                <Input
                  id={field}
                  type="number"
                  placeholder={getFieldPlaceholder(field)}
                  {...register(field as any, { valueAsNumber: true })}
                  className="mt-1"
                />
              ) : (
                <Input
                  id={field}
                  placeholder={getFieldPlaceholder(field)}
                  {...register(field as any)}
                  className="mt-1"
                />
              )}
            </div>
          ))}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              취소
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="gap-2"
            >
              {isSubmitting && <LoaderCircle className="w-4 h-4 animate-spin" />}
              {isCreating ? '생성' : '저장'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function getFieldLabel(field: string): string {
  const labels: Record<string, string> = {
    location: '장소',
    speaker: '연사',
    source: '출처',
    url: '링크',
    youtube_id: '유튜브 ID',
    duration: '길이 (초)',
    author: '저자/편집자',
    publisher: '출판사',
    published_date: '출판일',
    release_date: '개봉일',
    runtime: '런타임 (분)',
    director: '감독',
    letter_type: '편지 타입',
  };
  return labels[field] || field;
}

function getFieldPlaceholder(field: string): string {
  const placeholders: Record<string, string> = {
    location: '예: 서울대학교 강당',
    speaker: '예: 김철수',
    source: '예: 중앙일보',
    url: 'https://...',
    youtube_id: 'dQw4w9WgXcQ',
    duration: '0',
    author: '이름',
    publisher: '출판사명',
    published_date: 'YYYY-MM-DD',
    release_date: 'YYYY-MM-DD',
    runtime: '0',
    director: '감독 이름',
    letter_type: '개인/단체',
  };
  return placeholders[field] || '';
}

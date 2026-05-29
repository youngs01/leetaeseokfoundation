'use client';

import { useState, useEffect } from 'react';
import { FileText, Plus, Edit2, Trash2, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { ContentEditDialog } from '@/components/admin/content-edit-dialog';

interface ContentItem {
  id: string;
  title: string;
  date: string;
  featured?: boolean;
  created_at?: string;
}

const CONTENT_TYPES = [
  { id: 'foundation', label: '재단 소식', icon: '📰' },
  { id: 'lecture', label: '강연 소식', icon: '🎤' },
  { id: 'press', label: '언론 보도', icon: '📺' },
  { id: 'video', label: '영상', icon: '🎥' },
  { id: 'gallery', label: '갤러리', icon: '🖼️' },
  { id: 'book', label: '도서', icon: '📚' },
  { id: 'movie', label: '영화', icon: '🎬' },
  { id: 'letter', label: '후원 감사편지', icon: '💌' },
];

export default function ContentManagementClient() {
  const [selectedType, setSelectedType] = useState('foundation');
  const [items, setItems] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch items for selected type
  useEffect(() => {
    fetchItems(selectedType);
  }, [selectedType]);

  async function fetchItems(type: string) {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/content/${type}?limit=50`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setItems(data.items || []);
    } catch (err) {
      setError('콘텐츠를 불러오지 못했습니다');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id: string) {
    try {
      const res = await fetch(`/api/admin/content/${selectedType}/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete');
      setItems(items.filter(item => item.id !== id));
      setDeleteId(null);
    } catch (err) {
      setError('콘텐츠를 삭제하지 못했습니다');
      console.error(err);
    }
  }

  function handleEdit(item: ContentItem) {
    setEditingItem(item);
    setIsEditOpen(true);
  }

  function handleCreate() {
    setEditingItem(null);
    setIsEditOpen(true);
  }

  function handleRefresh() {
    fetchItems(selectedType);
  }

  const typeConfig = CONTENT_TYPES.find(t => t.id === selectedType);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FileText className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-slate-900">콘텐츠 관리</h2>
            <p className="text-sm text-slate-600">홈페이지 콘텐츠 추가, 수정, 삭제</p>
          </div>
        </div>
        <Button
          onClick={handleCreate}
          className="gap-2"
        >
          <Plus className="w-4 h-4" />
          새 콘텐츠
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Tab Navigation */}
      <Tabs value={selectedType} onValueChange={setSelectedType} className="w-full">
        <TabsList className="grid grid-cols-4 lg:grid-cols-8 w-full">
          {CONTENT_TYPES.map(type => (
            <TabsTrigger key={type.id} value={type.id} className="text-xs lg:text-sm">
              <span className="hidden sm:inline">{type.icon}</span>
              <span className="hidden lg:inline">{type.label}</span>
              <span className="lg:hidden">{type.icon}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {CONTENT_TYPES.map(type => (
          <TabsContent key={type.id} value={type.id} className="space-y-4">
            {/* Title and count */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">
                {type.icon} {type.label}
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isLoading}
              >
                {isLoading ? <LoaderCircle className="w-4 h-4 animate-spin" /> : '새로고침'}
              </Button>
            </div>

            {/* Loading State */}
            {isLoading && (
              <Card>
                <CardContent className="p-8 text-center">
                  <LoaderCircle className="w-8 h-8 animate-spin mx-auto text-slate-400 mb-2" />
                  로드 중...
                </CardContent>
              </Card>
            )}

            {/* Empty State */}
            {!isLoading && items.length === 0 && (
              <Card>
                <CardContent className="p-8 text-center">
                  <FileText className="w-12 h-12 mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-500 mb-4">콘텐츠가 없습니다</p>
                  <Button onClick={handleCreate}>첫 콘텐츠 추가</Button>
                </CardContent>
              </Card>
            )}

            {/* Content List */}
            {!isLoading && items.length > 0 && (
              <div className="space-y-3">
                {items.map(item => (
                  <Card key={item.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-900 truncate">
                            {item.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-slate-500">
                              {new Date(item.date).toLocaleDateString('ko-KR')}
                            </span>
                            {item.featured && (
                              <Badge variant="default" className="text-xs">
                                대표
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(item)}
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => setDeleteId(item.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>콘텐츠 삭제</AlertDialogTitle>
            <AlertDialogDescription>
              이 콘텐츠를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-3 justify-end">
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && handleDelete(deleteId)}
              className="bg-red-600 hover:bg-red-700"
            >
              삭제
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* Edit/Create Dialog */}
      <ContentEditDialog
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
        contentType={selectedType}
        item={editingItem}
        onSave={() => {
          setIsEditOpen(false);
          fetchItems(selectedType);
        }}
      />
    </div>
  );
}

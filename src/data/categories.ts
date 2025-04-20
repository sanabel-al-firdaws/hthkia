interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: 'مشاريع',
    slug: 'projects',
    description: 'آخر المشاريع التي ساعدنا في إدارة الحشود فيها'
  },

  
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}
import { useState } from '#imports';

interface Item {
  id: number;
  name: string;
  email: string;
  address: string;
  mobile: string;
}

export const useItems = () => {
  const items = useState<Item[]>('items', () => []);

  const addItem = (item: Item) => {
    items.value.push(item);
  };

  const updateItem = (id: number, updatedItem: Item) => {
    const index = items.value.findIndex(item => item.id === id);
    if (index !== -1) {
      items.value[index] = updatedItem;
    }
  };

  const deleteItem = (id: number) => {
    const res = confirm("Are you sure want to delete?")
    if(res){
      items.value = items.value.filter(item => item.id !== id);
    }
  };

  const getItemById = (id: number): Item | undefined => {
    return items.value.find(item => item.id === id);
  };

  return {
    items,
    addItem,
    updateItem,
    deleteItem,
    getItemById,
  };
};

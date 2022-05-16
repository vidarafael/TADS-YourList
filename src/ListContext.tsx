import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ISubList {
  id: string;
  description: string;
  isFinished: boolean;
  isEditable: boolean;
}

interface ILists {
  id: string;
  title: string;
  description: string;
  status: string;
  tasks: ISubList[];
  createdAt: Date;
}

interface ListProviderProps {
  children: ReactNode;
}

interface ListContextData {
  lists: ILists[];
  setLists: Dispatch<SetStateAction<ILists[]>>;
}

export const ListContext = createContext<ListContextData>(
  {} as ListContextData
);

export function ListProvider({ children }: ListProviderProps) {
  const storageLists = localStorage.getItem('lists');
  const [lists, setLists] = useState<ILists[]>([]);

  useEffect(() => {
    if (storageLists) {
      const storageListsParse: ILists[] = JSON.parse(storageLists);
      const allListsWithEditableFalse = storageListsParse.map((listItem) => {
        if (listItem.tasks.length > 0) {
          listItem.tasks.map((sublistItem) => {
            sublistItem.isEditable = false;
            return sublistItem;
          });
        }
        return listItem;
      });

      setLists(allListsWithEditableFalse);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  return (
    <ListContext.Provider value={{ lists, setLists }}>
      {children}
    </ListContext.Provider>
  );
}

export function useList() {
  const context = useContext(ListContext);

  return context;
}

// src/pages/discipline/Discipline.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { AlertTriangle, Bell, FilePenLine, FolderOpen } from "lucide-react";

interface DisciplineProps {
  selectedDocument?: DocumentType | null;
}

const Discipline = ({ selectedDocument }: DisciplineProps) => {
  console.log(selectedDocument);
  const cards = [
    {
      title: "ACTION",
      count: 1,
      icon: <FilePenLine className="w-6 h-6 text-gray-400" />,
      color: "bg-white",
    },
    {
      title: "PENDING DOCUMENTS",
      count: 195,
      icon: <Bell className="w-6 h-6 text-gray-400" />,
      color: "bg-white",
    },
    {
      title: "FORWARDED TO PO",
      count: 6,
      icon: <Bell className="w-6 h-6 text-gray-400" />,
      color: "bg-white",
    },
    {
      title: "SUSPENSION",
      count: 0,
      icon: <Bell className="w-6 h-6 text-gray-400" />,
      color: "bg-white",
    },
    {
      title: "PENDING INCIDENTS",
      count: 0,
      icon: <AlertTriangle className="w-6 h-6 text-gray-400" />,
      color: "bg-white",
    },
    {
      title: "DRAFTS",
      count: 0,
      icon: <FolderOpen className="w-6 h-6 text-gray-400" />,
      color: "bg-white",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-6">
        <div className="text-2xl text-gray-700 mb-6 text-center">
          DISCIPLINE MANAGEMENT
        </div>
        <div className="flex space-x-4 mb-6 border-b">
          <Button
            variant="ghost"
            className="text-gray-600 border-b-2 border-transparent hover:border-blue-500"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className="text-gray-600 border-b-2 border-transparent hover:border-blue-500"
          >
            My Summary
          </Button>
          <Button
            variant="ghost"
            className="text-gray-600 border-b-2 border-transparent hover:border-blue-500"
          >
            Employee Summary
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-gray-500 text-sm font-medium mb-2">
                      {card.title}
                    </div>
                    <div className="text-3xl font-semibold text-gray-700">
                      {card.count}
                    </div>
                  </div>
                  <div>{card.icon}</div>
                </div>
                <Button variant="destructive" className="mt-4">
                  VIEW
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discipline;

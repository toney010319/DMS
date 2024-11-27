import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";
import React, { useState } from "react";

interface Step {
  id: number;
  label: string;
  isActive: boolean;
}

const Nte: React.FC = () => {
  const [policyType, setPolicyType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [otherDescription, setOtherDescription] = useState<string>("");

  const steps: Step[] = [
    { id: 1, label: "Superior Input", isActive: true },
    { id: 2, label: "Employee Response", isActive: false },
    { id: 3, label: "Superior Assessment", isActive: false },
    {
      id: 4,
      label: "Coaching Action Plan & Employee Signature",
      isActive: false,
    },
    { id: 5, label: "1st Level Sup Signature", isActive: false },
    { id: 6, label: "2nd Level Sup Signature", isActive: false },
  ];

  const attendanceDescriptions = [
    "Tardiness",
    "Unauthorized/Unexcused Absence",
    "No Call No Show (NCNS)",
  ];

  const cocdDescriptions = [
    "Behavior at Work",
    "Destruction of Property",
    "Insubordination",
    "Record Keeping",
    "Safety and Security",
    "Other",
  ];

  const handlePolicyTypeChange = (value: string) => {
    setPolicyType(value);
    setDescription(""); // Reset description when policy type changes
    setOtherDescription(""); // Reset other description
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  return (
    <div className="p-6">
      <Card className="max-w-3xl mx-auto h-full flex flex-col">
        <CardHeader className="flex-none">
          <CardTitle className="text-xl font-semibold text-gray-700">
            NOTICE TO EXPLAIN
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          {/* Progress Steps - Fixed at top */}
          <div className="flex-none relative mb-12">
            {/* Base line */}
            <div className="absolute top-[11px] left-0 right-0 h-[1px] bg-gray-200" />

            {/* Steps container */}
            <div className="relative flex justify-between items-start px-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center"
                  style={{ minWidth: "100px" }}
                >
                  {/* Dot */}
                  <div
                    className={`w-[22px] h-[22px] rounded-full border-2 ${
                      step.isActive
                        ? "bg-blue-500 border-blue-500"
                        : "bg-white border-gray-300"
                    } relative z-10`}
                  />
                  {/* Label */}
                  <span
                    className={`text-xs mt-2 text-center leading-tight ${
                      step.isActive ? "text-blue-500" : "text-gray-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scrollable Form Fields */}
          <div className="flex-1">
            <div className="space-y-4 max-w-xl mx-auto px-4">
              <div>
                <label
                  htmlFor="employeeName"
                  className="block text-sm font-medium text-gray-800"
                >
                  Employee Name:
                </label>
                <Input id="employeeName" className="bg-gray-50" />
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-800"
                >
                  Position:
                </label>
                <Input id="position" className="bg-gray-50" />
              </div>

              <div>
                <label
                  htmlFor="issued by"
                  className="block text-sm font-medium text-gray-800"
                >
                  Issued by:
                </label>
                <Input id="issued by" className="bg-gray-50" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800">
                  Policy Type:
                </label>
                <Select
                  value={policyType}
                  onValueChange={handlePolicyTypeChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select policy type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="attendance">Attendance</SelectItem>
                    <SelectItem value="cocd">
                      Code of Conduct and Discipline
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {policyType && (
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Description:
                  </label>
                  <Select
                    value={description}
                    onValueChange={handleDescriptionChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select description" />
                    </SelectTrigger>
                    <SelectContent>
                      {policyType === "attendance"
                        ? attendanceDescriptions.map((desc) => (
                            <SelectItem key={desc} value={desc.toLowerCase()}>
                              {desc}
                            </SelectItem>
                          ))
                        : cocdDescriptions.map((desc) => (
                            <SelectItem key={desc} value={desc.toLowerCase()}>
                              {desc}
                            </SelectItem>
                          ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Conditional 'Other' input field */}
              {description === "other" && (
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Please Specify:
                  </label>
                  <Input
                    value={otherDescription}
                    onChange={(e) => setOtherDescription(e.target.value)}
                    placeholder="Enter additional details"
                    className="w-full placeholder:text-xs"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-800">
                  Infraction date:
                </label>
                <div className="relative">
                  <Input type="date" className="w-full" />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800">
                  Details:
                </label>
                <textarea
                  className="w-full min-h-[100px] p-2 border rounded-md placeholder:text-xs"
                  placeholder="Description of Offense/s (Cite Specific Offense/s or underperformance under the code of Conduct and Discipline, including dates, and other necessary details) and amount of loss/damage,if any."
                />
              </div>

              <div>
                <Input type="file" className="w-full cursor-pointer" />
              </div>

              <div className="flex gap-4">
                <Button className="bg-blue-500 text-white hover:bg-blue-600">
                  Create NTE
                </Button>
                <Button variant="destructive">Save Draft</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Nte;

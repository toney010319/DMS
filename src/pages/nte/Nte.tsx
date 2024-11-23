import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Step {
  id: number;
  label: string;
  isActive: boolean;
}

const Nte: React.FC = () => {
  const steps: Step[] = [
    { id: 1, label: "Superior Input", isActive: true },
    { id: 2, label: "Employee Response", isActive: false },
    { id: 3, label: "Superior Assessment", isActive: false },
    { id: 4, label: "Coaching Action Plan & Employee Signature", isActive: false },
    { id: 5, label: "1st Level Sup Signature", isActive: false },
    { id: 6, label: "2nd Level Sup Signature", isActive: false },
  ];
  const descriptions = [
    "Failure to Login/Logout",
    "Tardiness",
    "Unauthorized/Unexcused Absence",
    "NCNS",
    "Critical - Unauthorized/Unexcused Absence/NCNS",
  ];

  return (
    <div className=" p-6">
      <Card className="w-full max-w-7xl mx-auto h-full flex flex-col">
        <CardHeader className="flex-none">
          <CardTitle className="text-xl font-semibold text-gray-700">NOTICE TO EXPLAIN</CardTitle>
        </CardHeader>

        <CardContent className="flex-1   flex flex-col">
          {/* Progress Steps - Fixed at top */}
          <div className="flex-none relative mb-12 px-4">
            {/* Base line */}
            <div className="absolute top-[11px] left-0 right-0 h-[1px] bg-gray-200" />

            {/* Steps container */}
            <div className="relative flex justify-between items-start">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center" style={{ minWidth: "120px" }}>
                  {/* Dot */}
                  <div
                    className={`w-[22px] h-[22px] rounded-full border-2 ${
                      step.isActive ? "bg-blue-500 border-blue-500" : "bg-white border-gray-300"
                    } relative z-10`}
                  />
                  {/* Label */}
                  <span
                    className={`text-sm mt-2 text-center leading-tight ${
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
          <div className="flex-1  pr-4">
            <div className="space-y-6">
              <div>
                <label htmlFor="inputEmployeeName" className="block text-sm font-medium text-gray-600 mb-1">
                  Employee Name:
                </label>
                <Input id="inputEmployeeName" name="inputEmployeeName" placeholder="Termu" />
              </div>

              <div>
                <label htmlFor="incidentReportTracking" className="block text-sm font-medium text-gray-600 mb-1">
                  Incident Report Tracking Number:
                </label>
                <Input id="incidentReportTracking" name="incidentReportTracking" placeholder="" />
              </div>

              <div>
                <label htmlFor="trackingNumber" className="block text-sm font-medium text-gray-600 mb-1">
                  Tracking Number:
                </label>
                <Input id="trackingNumber" className="bg-gray-50" />
              </div>

              <div>
                <label htmlFor="qnectId" className="block text-sm font-medium text-gray-600 mb-1">
                  Employee QnectID:
                </label>
                <Input id="qnectId" className="bg-gray-50" />
              </div>

              <div>
                <label htmlFor="employeeName" className="block text-sm font-medium text-gray-600 mb-1">
                  Employee Name:
                </label>
                <Input id="employeeName" className="bg-gray-50" />
              </div>

              <div>
                <label htmlFor="immediateSupervisor" className="block text-sm font-medium text-gray-600 mb-1">
                  Immediate Supervisor:
                </label>
                <Input id="immediateSupervisor" className="bg-gray-50" />
              </div>

              <div>
                <label htmlFor="firstLevelManager" className="block text-sm font-medium text-gray-600 mb-1">
                  1st Level Manager:
                </label>
                <Input id="firstLevelManager" className="bg-gray-50" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">POLICY TYPE:</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select policy type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="attendance">Attendance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">DESCRIPTION:</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select description" />
                  </SelectTrigger>
                  <SelectContent>
                    {descriptions.map((desc) => (
                      <SelectItem key={desc} value={desc.toLowerCase()}>
                        {desc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Nte;

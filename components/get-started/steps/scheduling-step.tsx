"use client"

import { useState } from "react"
import type { FormData } from "../get-started-form"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, Video, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { motion } from "framer-motion"

interface SchedulingStepProps {
  scheduling: NonNullable<FormData["scheduling"]>
  onUpdate: (field: keyof NonNullable<FormData["scheduling"]>, value: any) => void
}

export default function SchedulingStep({ scheduling, onUpdate }: SchedulingStepProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [isAltCalendarOpen, setIsAltCalendarOpen] = useState(false)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Schedule Your Consultation</h2>
      <p className="text-muted-foreground mb-6">
        Select your preferred date and time for a consultation with our specialist.
      </p>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Preferred Date</Label>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !scheduling.preferredDate && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {scheduling.preferredDate ? format(scheduling.preferredDate, "PPP") : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={scheduling.preferredDate || undefined}
                onSelect={(date) => {
                  onUpdate("preferredDate", date)
                  setIsCalendarOpen(false)
                }}
                disabled={(date) => {
                  // Disable past dates and weekends
                  const now = new Date()
                  now.setHours(0, 0, 0, 0)
                  const day = date.getDay()
                  return date < now || day === 0 || day === 6
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <p className="text-xs text-muted-foreground">
            Consultations are available Monday-Friday. Select a date at least 24 hours in advance.
          </p>
        </div>

        <div className="space-y-3">
          <Label>Preferred Time</Label>
          <RadioGroup
            value={scheduling.preferredTime}
            onValueChange={(value) => onUpdate("preferredTime", value)}
            className="grid gap-3 sm:grid-cols-3"
          >
            <div
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border p-4 transition-all",
                scheduling.preferredTime === "morning" ? "border-primary bg-primary/5" : "border-border",
              )}
            >
              <RadioGroupItem value="morning" id="time-morning" className="sr-only" />
              <Label htmlFor="time-morning" className="cursor-pointer text-center">
                <span className="block text-lg font-medium mb-1">Morning</span>
                <span className="text-sm text-muted-foreground">9:00 AM - 12:00 PM</span>
              </Label>
            </div>

            <div
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border p-4 transition-all",
                scheduling.preferredTime === "afternoon" ? "border-primary bg-primary/5" : "border-border",
              )}
            >
              <RadioGroupItem value="afternoon" id="time-afternoon" className="sr-only" />
              <Label htmlFor="time-afternoon" className="cursor-pointer text-center">
                <span className="block text-lg font-medium mb-1">Afternoon</span>
                <span className="text-sm text-muted-foreground">1:00 PM - 4:00 PM</span>
              </Label>
            </div>

            <div
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border p-4 transition-all",
                scheduling.preferredTime === "evening" ? "border-primary bg-primary/5" : "border-border",
              )}
            >
              <RadioGroupItem value="evening" id="time-evening" className="sr-only" />
              <Label htmlFor="time-evening" className="cursor-pointer text-center">
                <span className="block text-lg font-medium mb-1">Evening</span>
                <span className="text-sm text-muted-foreground">4:00 PM - 6:00 PM</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Alternate Date (Optional)</Label>
          <Popover open={isAltCalendarOpen} onOpenChange={setIsAltCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !scheduling.alternateDate && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {scheduling.alternateDate ? format(scheduling.alternateDate, "PPP") : "Select an alternate date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={scheduling.alternateDate || undefined}
                onSelect={(date) => {
                  onUpdate("alternateDate", date)
                  setIsAltCalendarOpen(false)
                }}
                disabled={(date) => {
                  // Disable past dates, weekends, and preferred date
                  const now = new Date()
                  now.setHours(0, 0, 0, 0)
                  const day = date.getDay()
                  const isPreferredDate =
                    scheduling.preferredDate &&
                    date.getDate() === scheduling.preferredDate.getDate() &&
                    date.getMonth() === scheduling.preferredDate.getMonth() &&
                    date.getFullYear() === scheduling.preferredDate.getFullYear()
                  return date < now || day === 0 || day === 6 || isPreferredDate
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-3">
          <Label>Consultation Type</Label>
          <RadioGroup
            value={scheduling.consultationType}
            onValueChange={(value) => onUpdate("consultationType", value)}
            className="grid gap-3 grid-cols-1 sm:grid-cols-3"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border p-4 transition-all",
                scheduling.consultationType === "video" ? "border-primary bg-primary/5" : "border-border",
              )}
            >
              <RadioGroupItem value="video" id="type-video" className="sr-only" />
              <Label htmlFor="type-video" className="cursor-pointer text-center">
                <Video className="h-8 w-8 mb-2 mx-auto text-primary" />
                <span className="block text-base font-medium">Video Call</span>
              </Label>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border p-4 transition-all",
                scheduling.consultationType === "phone" ? "border-primary bg-primary/5" : "border-border",
              )}
            >
              <RadioGroupItem value="phone" id="type-phone" className="sr-only" />
              <Label htmlFor="type-phone" className="cursor-pointer text-center">
                <Phone className="h-8 w-8 mb-2 mx-auto text-primary" />
                <span className="block text-base font-medium">Phone Call</span>
              </Label>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border p-4 transition-all",
                scheduling.consultationType === "inperson" ? "border-primary bg-primary/5" : "border-border",
              )}
            >
              <RadioGroupItem value="inperson" id="type-inperson" className="sr-only" />
              <Label htmlFor="type-inperson" className="cursor-pointer text-center">
                <Users className="h-8 w-8 mb-2 mx-auto text-primary" />
                <span className="block text-base font-medium">In-Person</span>
              </Label>
            </motion.div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

export interface Experience {
  id: string;
  title: string;
  location: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
  borderColor?: string;
  badge?: {
    text: string;
    color: string;
  };
  availableDates: string[];
  timeSlotsByDate: Record<string, TimeSlot[]>;
}

export interface TimeSlot {
  date: string;
  time: string;
  available: number;
  soldOut?: boolean;
}

export interface BookingDetails {
  experienceId: string;
  experienceName: string;
  date: string;
  time: string;
  quantity: number;
  price: number;
  taxes: number;
  total: number;
}

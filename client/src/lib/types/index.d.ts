type Activity = {
    id: string;
    title: string;
    date: string;
    description: string;
    category: string;
    isCancelled: boolean;
    city: string;
    venue: string;
    latitude: number;
    longitude: number;
};

/** The subset of Activity fields editable through the activity form. */
type ActivityFormValues = Pick<Activity, 'title' | 'description' | 'category' | 'date' | 'city' | 'venue'>;

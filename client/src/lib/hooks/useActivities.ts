import axios from "axios";
import { useEffect, useState } from "react";
import agent from "../api/agent";

/**
 * Loads activities from the API and exposes in-memory create/update/delete.
 * Mutations are client-side only for now (they are not persisted to the API).
 */
export function useActivities() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        agent.get<Activity[]>('/activities', { signal: controller.signal })
            .then(response => setActivities(response.data))
            .catch(err => {
                if (axios.isCancel(err)) return;
                console.error('Error fetching activities:', err);
                setError('Could not load activities. Please try again later.');
            })
            .finally(() => {
                if (!controller.signal.aborted) setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    const createActivity = (values: ActivityFormValues): Activity => {
        const newActivity: Activity = {
            ...values,
            id: crypto.randomUUID(),
            isCancelled: false,
            latitude: 0,
            longitude: 0,
        };
        setActivities(prev => [...prev, newActivity]);
        return newActivity;
    };

    const updateActivity = (id: string, values: ActivityFormValues) => {
        // Merge so fields not on the form (coordinates, isCancelled) are preserved.
        setActivities(prev => prev.map(a => a.id === id ? { ...a, ...values } : a));
    };

    const deleteActivity = (id: string) => {
        setActivities(prev => prev.filter(a => a.id !== id));
    };

    return { activities, isLoading, error, createActivity, updateActivity, deleteActivity };
}

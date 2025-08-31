import {getAuthToken} from "./auth.ts";
import type {Event} from "../models/Event.ts";
import {Quiz} from "../models/Quiz.ts";

export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch places');
    }

    return resData.places;
}

export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch user places');
    }

    return resData.places;
}

export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to update user data.');
    }

    return resData.message;
}

export async function loginUser(authData: { email: string, password: string }, mode: string) {

    const url = `http://localhost:8080/${mode}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(authData),
    });

    if (response.status === 422 || response.status === 401) {
        return response; //return for useActionData
    }

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not authenticate user.'}), {
            status: 500,
        });
    }

    return response.json();
}

export type getEventResponse = {
    event: Event;
}

export async function getEventById(id: string): Promise<Event> {
    const response = await fetch('http://localhost:8080/events/' + id);
    const resData: getEventResponse = await response.json();

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'No events found.'}), {status: 500}); // Fallback to errorElement
    } else {
        return resData.event;
    }
}

export async function deleteEventById(id: string) {
    const method = 'DELETE';
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: method,
        headers: {'Authorization': 'Bearer ' + getAuthToken()},
    });

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not delete event.'}), {status: 500}); // Fallback to errorElement
    }

    return response;
}

export async function patchEventById(id: string, eventData: Event) {

    let url = 'http://localhost:8080/events';
    url += `/${id}`;

    const token = getAuthToken();
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(eventData),
    });

    if (response.status === 422) {
        return response; //return for useActionData
    }

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not save event.'}), {
            status: 500,
        });
    }

    return response;
}

export async function postEvent(eventData: Event) {
    let url = 'http://localhost:8080/events';

    const token = getAuthToken();

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(eventData),
    });

    if (response.status === 422) {
        return response; //return for useActionData
    }

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not save event.'}), {
            status: 500,
        });
    }

    return response;
}

export type getAllEventsResponse = {
    events: Event[];
}

export async function getAllEvents(): Promise<Event[]> {
    const response = await fetch('http://localhost:8080/events');
    const resData: getAllEventsResponse = await response.json();

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'No events found.'}), {
            status: 500,
            statusText: 'No events found.'
        }); // Fallback to errorElement
    }

    return resData.events;
}

export type getAllQuizzesResponse = {
    quizzes: Quiz[];
}

export async function getAllQuizzes(): Promise<Quiz[]> {
    const response = await fetch('http://localhost:8080/quizzes');
    const resData: getAllQuizzesResponse = await response.json();

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'No quizzes found.'}), {status: 500}); // Fallback to errorElement
    }

    return resData.quizzes;
}

export type getQuizByIdResponse = {
    quiz: Quiz;
}

export async function getQuizById(id: string): Promise<Quiz> {
    const response = await fetch('http://localhost:8080/quizzes/' + id);
    const resData: getQuizByIdResponse = await response.json();

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'No quiz found.'}), {status: 500}); // Fallback to errorElement
    }
    return resData.quiz;
}

export async function updateUserPlacess(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to update user data.');
    }

    return resData.message;
}


export async function postQuiz(quizData: Quiz) {
    let url = 'http://localhost:8080/quizzes';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getAuthToken(),

        },
        body: JSON.stringify(quizData),
    });

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not save quiz.'}), {
            status: 500,
        });
    }

    return response;
}

export async function deleteQuizById(id: string) {
    const response = await fetch('http://localhost:8080/quizzes/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getAuthToken()

        },
    });

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not delete quiz.'}), {status: 500}); // Fallback to errorElement
    }
}

export async function patchQuizById(id: string, quizData) {

    let url = 'http://localhost:8080/quizzes';
    url += `/${id}`;

    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getAuthToken(),

        },
        body: JSON.stringify(quizData),
    });

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not save quiz.'}), {
            status: 500,
        });
    }

    return response;
}
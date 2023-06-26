import { useEffect, useState } from "react";
import Review  from "../core/review";
import ReviewCard  from "../content-pages/content-reviewcard";

export default function ReviewStack() {
    const [reviews, setReviews] = useState<Review[]>([]);

    

    useEffect(() => {
        // make a request to your API here
        fetch("/api/reviews")
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-wrap justify-around max-w-4xl">
                {reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
}


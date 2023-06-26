import Review from "../core/review";

interface ReviewCardProps {
    review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    return (
        <div className="p-4 m-4 bg-white rounded shadow-lg w-60">
            <h2 className="text-xl">{review.name}</h2>
            <p>{review.content}</p>
            <div className="mt-4">
                {/* <p>Rating: {Array(review.rating).fill().map((_, i) => <span key={i}>★</span>)}</p>  */}
            </div>
        </div>
    );
}

export default ReviewCard;

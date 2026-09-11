import { Star } from "lucide-react";
function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={
            star <= rating ? "fill-primary text-primary" : "text-border"
          }
        />
      ))}
      <span className="text-xs text-text-secondary">{rating}</span>
    </div>
  );
}

export default StarRating;

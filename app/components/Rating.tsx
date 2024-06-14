import React from "react";
interface Props {
  rating: number;
}
const Rating = ({ rating }: Props) => {
  const totalHearts = 5;

  return (
    <div className="rating gap-1">
      {[...Array(rating)].map((_, i) => (
        <input
          key={i}
          name={`rating-${i}`}
          className="mask mask-heart bg-red-400"
        />
      ))}
      {[...Array(totalHearts - rating)].map((_, i) => (
        <input
          key={i + rating}
          name={`rating-${i + rating}`}
          className="mask mask-heart bg-red-200"
        />
      ))}
    </div>
  );
};

export default Rating;

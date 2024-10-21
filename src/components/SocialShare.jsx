import React from 'react';

const SocialShare = () => {
  const handleShare = (platform) => {
    const url = window.location.href;
    const message = "Check out this impact card!";

    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${message}&url=${url}`, '_blank');
    }
  };

  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => handleShare('facebook')}
        className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-500 transition"
      >
        Share on Facebook
      </button>
      <button
        onClick={() => handleShare('twitter')}
        className="bg-blue-400 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-300 transition"
      >
        Share on Twitter
      </button>
    </div>
  );
};

export default SocialShare;

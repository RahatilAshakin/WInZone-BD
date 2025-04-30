import React from 'react';

const Products = () => {
    return (
        <div className='mt-10'>
            <div className="card bg-base border-2 border-amber-200 w-96 shadow-lg">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-2xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions mt-6">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Products;
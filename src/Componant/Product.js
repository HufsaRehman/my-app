import React from 'react';
import Image from 'next/image';

const Product = async () => {
  // Fetch data from the API
  const response = await fetch('http://localhost:1337/api/products?/api/products?populate[Image][fields][0]=name&populate[Image][fields][1]=url&pagination[pageSize]=10&pagination[page]=1&status=published&locale[0]=en', { cache: "no-store" });
  const data = await response.json();
  if (data)
    console.log("Hello this is the data from server", data); // Log the data to inspect its structure

  // Handle loading and errors if needed


  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data && data.data?.map((car, index) => (
            <div className="col" key={index}>
              <div className="card shadow-sm">

                <Image
                  src={`http://localhost:1337${car.Image.url}`} // Use the correct URL
                alt={car.title || 'Product image'}
                width={420}
                height={250}
                layout="responsive" // Optional, for better layout handling
                  />

                <div className="card-body">
                  <p className="card-text">{car.title || 'No title available'}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Product;
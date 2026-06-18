export default function CityCardsSkeleton() {
  return (
    <div className="row justify-content-center w-100 mx-0 mt-2 mb-5">
      <div className="col-11 col-md-8 col-lg-6 col-xxl-4">
        <p className="mb-3 fs-5 text-white-50">Popularne miasta</p>
        <div className="row g-3">
          {[...Array(6)].map((_, i) => (
            <div className="col-6" key={i}>
              <div
                className="card bg-dark border border-secondary rounded-3 p-3"
                style={{ height: "84px", opacity: 0.4 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

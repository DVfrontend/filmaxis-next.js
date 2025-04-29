export default function Subscribe() {
  return (
    <>
      <h1 className="text-4xl font-semibold">Офромить подписку на сайт</h1>
      <section className="grid grid-cols-3 gap-3">
        <div className="border rounded-sm brx-4 bry-2">
          <h2 className="m-3">Тариф одноразовый </h2 >
          
        </div>

        <div className="border rounded-sm brx-4 bry-2">
          <h2 className="m-3">Тариф ежегодный</h2>
          
        </div>

        <div className="border rounded-sm brx-4 bry-2">
          <h2 className="m-3">Тариф ежемесячный</h2 >
        </div>
      </section>
    </>
  );
}

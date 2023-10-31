"use client";

export default function Test() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-baseColor">
      <table className="mb-2 w-[68%] table-fixed text-xs font-light">
        <tr>
          <td
            className="h-8 cursor-pointer bg-slate-300"
            onClick={e => console.log(e)}
          >
            Первая ячейка
          </td>
          <td
            className="h-8 cursor-pointer bg-slate-200"
            onClick={e => console.log(e)}
          >
            Вторая ячейка
          </td>
        </tr>
      </table>
    </div>
  );
}

import { Button } from "@/ui/Button/Button";

export function Stata() {
  return (
    <div className="stata flex max-h-full w-[40%] flex-col bg-baseColor/0">
      <div className="stata__text mb-4 mt-1 flex font-inter text-4xl font-thin text-baseColor">
        <p className="w-1/2 ">Сегодня:</p>
        <p className="w-1/2 text-end">
          <span className="font-irish">21&nbsp;</span>октября
        </p>
      </div>
      <div className="divider mb-2 h-[1px] w-full bg-gradient-to-r from-transparent via-primary"></div>
      <div className="stata__text mb-3 mt-1 flex font-inter text-3xl font-thin text-baseColor">
        <p className="w-1/2 ">Всего заявок:</p>
        <p className="w-1/2 pl-8 text-center font-irish text-4xl">{18}</p>
      </div>
      <div className="divider mb-2 h-[1px] w-full bg-gradient-to-r from-transparent via-primary"></div>
      <div className="stata__text mb-3 mt-1 flex font-inter text-3xl font-thin text-baseColor">
        <p className="w-1/2 leading-none">Заявок на даты, из них:</p>
        <p className="w-1/2 pl-8 text-center font-irish text-4xl">{8}</p>
      </div>
      <div className="divider mb-2 h-[1px] w-full bg-gradient-to-r from-transparent via-primary"></div>
      <div className="stata__text mb-2 mt-1 flex font-inter text-2xl font-thin text-baseColor">
        <p className="w-1/2 pl-8 leading-none">Получена</p>
        <p className="w-1/2 pl-8 text-center font-irish text-3xl leading-none">
          {8}
        </p>
      </div>
      <div className="stata__text mb-1 mt-1 flex font-inter text-2xl font-thin text-baseColor">
        <p className="w-1/2 pl-8 leading-none">Выполнена</p>
        <p className="w-1/2 pl-8 text-center font-irish text-3xl">{8}</p>
      </div>
      <div className="stata__text mb-8 mt-1 flex font-inter text-2xl font-thin text-baseColor">
        <p className="w-1/2 pl-8 leading-none">Отменена</p>
        <p className="w-1/2 pl-8 text-center font-irish text-3xl">{1}</p>
      </div>
      <Button
        title={"Заявки"}
        style={"mx-auto"}
      />
    </div>
  );
}

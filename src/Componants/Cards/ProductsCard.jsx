/* eslint-disable */
import GoldenStar from "../../assets/star.png";
import love from "../../assets/heart.png";

function ProductsCard(props) {
  return (
    <div className=" relative rounded-lg cursor-pointer">
      <div className="absolute w-full h-full flex justify-between items-end py-6">
        <div className="w-20 h-8 flex items-center px-2 gap-4  bg-slate-100 rounded-r-full">
          <img className="w-6 h-6 " src={GoldenStar} alt="" />
          <p className="text-xl md:text-2xl font-bold text-orange-500">4</p>
        </div>
        <div className="flex gap-4">
          <div className="w-8 h-8 bg-slate-100 rounded-full">
            <i>
              <img className="p-1.5" src={love} alt="" />
            </i>
          </div>
          <div className="w-16 h-8 flex justify-center items-center bg-orange-500 rounded-l-full">
            <p className="text-xl md:text-2xl lg:text-xl font-bold text-slate-100">$10.0</p>
          </div>
        </div>
      </div>
      <img className=" w-full h-full rounded-xl" src={props.img} alt="" />
    </div>
  );
}

export default ProductsCard;

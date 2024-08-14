/* eslint-disable */

import { useNavigate } from "react-router-dom";
import CategoryItem from "../Componants/CategoryItem";
import Header from "../Componants/Header";
import Heading from "../Componants/Headnig";
import useCategories from "../Context/CategoriesContext";
import Footer from "../Componants/Footer";
import useReviews from "../Context/ReviewsContext";

function CategoriesScreen() {
  const { allCategories, loading } = useCategories();
  const navigate = useNavigate();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header></Header>
      <div className="mx-12 h-auto">
        <Heading
          className="mt-28 my-8 text-orange-500"
          value1="Categories"
        ></Heading>

        <div className="h-full w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 ">
          {allCategories && allCategories.length > 0 ? (
            allCategories.map((category) => (
              <CategoryItem
                key={category.categoryId}
                name={category.categoryName}
                img={category.categoryPic}
                onClick={() =>
                  navigate(`/getonecategory/${category.categoryId}`, {
                    state: { category },
                  })
                } 
              />
            ))
          ) : (
            <div>No categories available</div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default CategoriesScreen;

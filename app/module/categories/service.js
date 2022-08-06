import Category from "./model";
import { success, ExistsError } from "iyasunday";


export async function create(user, body) {
    try {
      const category = await Category.findOne({ category: body.category }).populate('createdBy');
      if (category) {
        throw new ExistsError(`${category.name} already Exist, Update The Existing Category`);
      }
     
        const addCategory = new Category();
        addCategory.description = body.description;
        addCategory.category = body.category.toUpperCase();
        addCategory.subCategory = body.subCategory.toUpperCase();
        addCategory.createdBy = user.id;
        await addCategory.save();
  
      return {
        success,
        message: `New Category Successfully Created`,
        data: addCategory,
      };
    } catch (err) {
      throw err;
    }
  };

  export async function getAll(){
    try {
      const viewCategories = await Category.find();
      if (!viewCategories) {
        throw new NotFoundError("Categories not found");
      }
      return {
        success,
        data: viewCategories,
        message: `Categories Retrieved Successfully`,
      };
    } catch (err) {
      throw err;
    }
  }

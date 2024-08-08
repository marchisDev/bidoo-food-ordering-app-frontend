import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from '@/api/MyRestaurantApi';
import ManageRestaurantForm from '@/forms/manage-restaurant-form/ManageRestaurantForm'

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreteLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateMyRestaurant();

  const isEditing = !!restaurant; // !! converts to boolean isEditing will be true if restaurant is exist and false if not

  return (
    <ManageRestaurantForm 
      restaurant={restaurant} 
      onSave={isEditing ? updateRestaurant : createRestaurant} // if editing true then updateRestaurant else createRestaurant
      isLoading={isCreteLoading || isUpdateLoading} 
    />
  )
}

export default ManageRestaurantPage;

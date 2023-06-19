import axios from "../plugins/axios";
import { ref } from "vue";

export const useDeleteData = () => {
    const deleteLoading = ref(true);
    const deleteError = ref(null);

    const deleteData = async (url) => {
        deleteLoading.value = true;
        try {
            const res = await axios.delete(url);
        } catch (e) {
            // console.log(e);
            deleteError.value = e;
        } finally {
            deleteLoading.value = false;
        }
    };

    return {
        deleteData,
        deleteLoading,
        deleteError,
    };
};

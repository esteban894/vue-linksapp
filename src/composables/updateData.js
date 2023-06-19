import axios from "../plugins/axios";
import { ref } from "vue";

export const useUpdateData = () => {
    const updatedData = ref(null);
    const updateLoading = ref(true);
    const updateError = ref(null);

    const updateData = async (url, dataToSend) => {
        updateLoading.value = true;
        try {
            const res = await axios.put(url, dataToSend);
            updatedData.value = res.data;
        } catch (e) {
            updateError.value = e;
        } finally {
            updateLoading.value = false;
        }
    };

    return {
        updateData,
        updatedData,
        updateLoading,
        updateError,
    };
};

import axios from "../plugins/axios";
import { ref } from "vue";

export const useSendData = () => {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const sendData = async (url, dataToSend) => {
        loading.value = true;
        try {
            const res = await axios.post(url, dataToSend);
            data.value = res.data;
        } catch (e) {
            error.value = e;
        } finally {
            loading.value = false;
        }
    };

    return {
        sendData,
        data,
        loading,
        error,
    };
};

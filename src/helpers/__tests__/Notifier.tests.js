import {mount} from "enzyme";
import {componentWithRouter} from "../../utils/routerUtils";
import {notifier} from '../Notifier';
import AlertItem from "../../components/Alert";

// describe("Testing Notifier helpers", () => {
//     it("Toast will render", () => {
//         notifier.notifyError('Error');
//         notifier.notifyError('Error');
//         const wrapper = mount(componentWithRouter());
//         expect(wrapper.find('.Toastify__toast-container').length).toEqual(1);
//     })
// })
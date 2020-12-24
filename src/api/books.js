// import client from 'shared/api/client';
//
// export const renewParticipantsLicense = (data: any) =>
//     client.put(`/participant/renewLicenses`, data);
//
// export const changeLicenseAutoRenew = (data: any) =>
//     client.put(`/participant/changeAutorenew`, { ...data });
//
// export const deleteParticipant = (data: any) =>
//     client.post(`/participant/delete`, data);
//
// export const fetchParticipant = (participantId: number) =>
//     client.get(`/participant/${participantId}`);
//
// export const updateParticipant = (participantId: number, data: any) =>
//     client.put(`/participant/${participantId}`, data);
//
// export const getParticipants = (trainingId: string, params: any) =>
//     client.get(`/training/${trainingId}/participants`, {
//         params: {
//             fields: 'fullname,email,license_status,license_autorenew,language__title',
//             ...params
//         }
//     });
//
// export const reInviteParticipants = (data: {
//     trainingId: number;
//     participants: Array<number>;
// }) => client.post(`/training/${data.trainingId}/reinviteParticipants`, data);

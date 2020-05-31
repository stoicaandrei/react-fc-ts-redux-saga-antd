export type patientTypes = 'incoming' | 'queued' | 'active';
export type Patient = {
  id: number;
  name: string;
  time: number;
  type: patientTypes;
};

type role = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'

export interface IRole {
  1: number
  2: number
  3: number
  4: number
  5: number
  6: number
  7: number
  8: number
  9: number
  10: number
  11: number
  toSelect: { text: string; value: number }[]
}

const role = {
  1: 'کاربر عادی',
  2: 'مدیر ارشد',
  3: 'مدیر',
  4: 'تکنسین',
  5: 'تکنسین ارشد',
  6: 'دکتر پاتولوژیست',
  7: 'دکتر پاتولوژیست ارشد',
  8: 'دکتر معالج',
  9: 'منشی',
  10: 'بیمار',
  11: 'ذینفع'
}
export default role

export enum roleEnum {
  Guest = 1,
  SuperAdmin = 2,
  Admin = 3,
  Technician = 4,
  TechnicianSupervisor = 5,
  DiagnosticianDoctor = 6,
  DiagnosticianDoctorSupervisor = 7,
  TreatingPhysician = 8,
  Secretary = 9,
  Patient = 10,
  Shareholder = 11
}

declare module 'vue/types/vue' {
  interface NuxtEnumInstance {
    role: IRole
  }
}

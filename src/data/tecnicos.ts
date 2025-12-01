export type Tecnico = {
  email: string
  disponibilidade: ReadonlyArray<string>
  nome: string
  iniciais: string
}

export const tecnicos: ReadonlyArray<Tecnico> = [
  {
    disponibilidade: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    email: 'carlos.silva@test.com',
    iniciais: 'CS',
    nome: 'Carlos Silva',
  },
  {
    disponibilidade: ['13:00', '14:00', '15:00', '16:00'],
    email: 'ana.oliveira@test.com',
    iniciais: 'AO',
    nome: 'Ana Oliveira',
  },
  {
    disponibilidade: ['08:00', '09:00', '14:00', '15:00', '18:00'],
    email: 'cintia.lucia@test.com',
    iniciais: 'CL',
    nome: 'Cíntia Lúcia',
  },
  {
    disponibilidade: ['07:00', '09:00', '11:00', '15:00', '16:00', '17:00', '18:00'],
    email: 'marcos.alves@test.com',
    iniciais: 'MA',
    nome: 'Marcos Alves',
  },
]

export const getTecnicoByEmail = (email: string): Tecnico | undefined => {
  return tecnicos.find((tecnico) => tecnico.email === email)
}


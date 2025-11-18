export type Status = {
  label: string
  variant: 'open' | 'in-progress' | 'closed'
}

export type Chamado = {
  atualizadoEm: string
  criadoEm: string
  descricao: string
  id: string
  precoBase: string
  servico: string
  titulo: string
  valorTotal: string
  adicionais?: ReadonlyArray<{
    nome: string
    valor: string
  }>
  cliente: {
    email: string
    nome: string
    iniciais: string
  }
  tecnico: {
    email: string
    nome: string
    iniciais: string
  }
  status: Status
}

export const chamados: ReadonlyArray<Chamado> = [
  {
    atualizadoEm: '13/04/25 20:56',
    cliente: {
      email: 'andre.costa@test.com',
      iniciais: 'AC',
      nome: 'André Costa',
    },
    criadoEm: '13/04/25 10:30',
    descricao: 'A conexão de rede está muito lenta, dificultando o trabalho diário.',
    id: '00003',
    precoBase: 'R$ 180,00',
    servico: 'Instalação de Rede',
    status: {
      label: 'Aberto',
      variant: 'open',
    },
    tecnico: {
      email: 'carlos.silva@test.com',
      iniciais: 'CS',
      nome: 'Carlos Silva',
    },
    titulo: 'Rede lenta',
    valorTotal: 'R$ 180,00',
  },
  {
    adicionais: [
      {
        nome: 'Assinatura de backup',
        valor: 'R$ 120,00',
      },
      {
        nome: 'Formatação do PC',
        valor: 'R$ 75,00',
      },
    ],
    atualizadoEm: '12/04/25 15:20',
    cliente: {
      email: 'andre.costa@test.com',
      iniciais: 'AC',
      nome: 'André Costa',
    },
    criadoEm: '12/04/25 09:12',
    descricao: 'O sistema de backup automático parou de funcionar. Última execução bem-sucedida foi há uma semana.',
    id: '00004',
    precoBase: 'R$ 200,00',
    servico: 'Recuperação de Dados',
    status: {
      label: 'Aberto',
      variant: 'open',
    },
    tecnico: {
      email: 'carlos.silva@test.com',
      iniciais: 'CS',
      nome: 'Carlos Silva',
    },
    titulo: 'Backup não está funcionando',
    valorTotal: 'R$ 395,00',
  },
  {
    atualizadoEm: '12/04/25 09:01',
    cliente: {
      email: 'aline.souza@test.com',
      iniciais: 'AS',
      nome: 'Aline Souza',
    },
    criadoEm: '11/04/25 14:30',
    descricao: 'O computador não liga mais. Não há sinal de vida quando pressiono o botão de energia.',
    id: '00001',
    precoBase: 'R$ 150,00',
    servico: 'Manutenção de Hardware',
    status: {
      label: 'Em atendimento',
      variant: 'in-progress',
    },
    tecnico: {
      email: 'carlos.silva@test.com',
      iniciais: 'CS',
      nome: 'Carlos Silva',
    },
    titulo: 'Computador não liga',
    valorTotal: 'R$ 150,00',
  },
  {
    atualizadoEm: '10/04/25 10:15',
    cliente: {
      email: 'julia.maria@test.com',
      iniciais: 'JM',
      nome: 'Julia Maria',
    },
    criadoEm: '09/04/25 08:00',
    descricao: 'Preciso instalar um software de gestão empresarial no computador da empresa.',
    id: '00002',
    precoBase: 'R$ 200,00',
    servico: 'Suporte de Software',
    status: {
      label: 'Encerrado',
      variant: 'closed',
    },
    tecnico: {
      email: 'ana.oliveira@test.com',
      iniciais: 'AO',
      nome: 'Ana Oliveira',
    },
    titulo: 'Instalação de software de gestão',
    valorTotal: 'R$ 200,00',
  },
  {
    atualizadoEm: '11/04/25 15:16',
    cliente: {
      email: 'suzane.moura@test.com',
      iniciais: 'SM',
      nome: 'Suzane Moura',
    },
    criadoEm: '10/04/25 11:20',
    descricao: 'Meu fone não conecta no computador. Já tentei várias portas USB e não funciona.',
    id: '00005',
    precoBase: 'R$ 80,00',
    servico: 'Suporte de Software',
    status: {
      label: 'Encerrado',
      variant: 'closed',
    },
    tecnico: {
      email: 'ana.oliveira@test.com',
      iniciais: 'AO',
      nome: 'Ana Oliveira',
    },
    titulo: 'Meu fone não conecta no computador',
    valorTotal: 'R$ 80,00',
  },
]

export const getChamadoById = (id: string): Chamado | undefined => {
  return chamados.find((chamado) => chamado.id === id)
}


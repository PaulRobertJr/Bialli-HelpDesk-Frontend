export type Cliente = {
  email: string
  nome: string
  iniciais: string
}

export const clientes: ReadonlyArray<Cliente> = [
  {
    email: 'andre.costa@client.com',
    iniciais: 'AC',
    nome: 'André Costa',
  },
  {
    email: 'julia.maria@client.com',
    iniciais: 'JM',
    nome: 'Julia Maria',
  },
  {
    email: 'aline.souza@client.com',
    iniciais: 'AS',
    nome: 'Aline Souza',
  },
  {
    email: 'marcelo.andrade@client.com',
    iniciais: 'MA',
    nome: 'Marcelo Andrade',
  },
  {
    email: 'suzane.moura@client.com',
    iniciais: 'SM',
    nome: 'Suzane Moura',
  },
]

export const getClienteByEmail = (email: string): Cliente | undefined => {
  return clientes.find((cliente) => cliente.email === email)
}


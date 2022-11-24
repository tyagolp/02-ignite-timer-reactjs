import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useContext } from 'react'
import { CyclesContext } from '../../context/CyclesContext'
import { HitoryContainer, HitoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HitoryContainer>
      <h1>Meu histórico</h1>
      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <HitoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((x) => (
              <tr key={x.id}>
                <td>{x.task}</td>
                <td>{x.minutesAmount} Minutos</td>
                <td>
                  {formatDistanceToNow(x.startDate, {
                    addSuffix: true,
                    locale: ptBr,
                  })}
                </td>
                <td>
                  {x.finishedDate && (
                    <Status statusColor="green">Concluido</Status>
                  )}

                  {x.interruptedData && (
                    <Status statusColor="red">Interrompido</Status>
                  )}
                  {!x.interruptedData && !x.finishedDate && (
                    <Status statusColor="yellow">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HitoryList>
    </HitoryContainer>
  )
}

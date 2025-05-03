import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <h1>
            Cass Money <span />
            <img src={logoImg} alt="" />
          </h1>
        </div>
        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <NewTransactionButton>New Transaction </NewTransactionButton>
          </Dialog.DialogTrigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

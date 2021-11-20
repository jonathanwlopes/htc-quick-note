import { ProfileAvatar } from "../ProfileAvatar"
import * as S from "./styles"

export const Profile = () => {
  return (
    <S.Container>
      <S.ProfileInfos>
        <S.Welcome>
          Olá, <S.NameProfile>Ana Clara</S.NameProfile>
        </S.Welcome>
        <S.Notes>
          Você possui <S.Quantity>32</S.Quantity> notas
        </S.Notes>
      </S.ProfileInfos>
      <ProfileAvatar />
    </S.Container>
  )
}

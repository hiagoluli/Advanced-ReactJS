import React from 'react';
import * as S from './styled'

const RepositoryItem = ({name, linkToRepo, fullName}) => {
  return (
    <S.WrapperTabs>
      <S.WrapperTitle>{ name }</S.WrapperTitle>
      <h4>full name:</h4>
      <a href={ linkToRepo } target="_blank" rel="noreferrer">
          { fullName }
      </a>
    </S.WrapperTabs>
  )
}

export default RepositoryItem
import Produto from '../components/Produto'
import { useGetProductsQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: product, isLoading } = useGetProductsQuery()

  if (isLoading) return <h2>Carregndo os produtos...</h2>

  const produtoEstaNosFavoritos = (produto: any) => {
    const produtoId = produto.id

    const IdsDosFavoritos = product?.map((f) => f.id) || []

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {product?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent

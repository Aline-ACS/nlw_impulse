import bugImage from '../assets/bug.svg'
import ideaImage from '../assets/idea.svg'
import otherImage from '../assets/other.svg'

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImage,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImage,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImage,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export type FeedbackTypeProps = keyof typeof feedbackTypes;
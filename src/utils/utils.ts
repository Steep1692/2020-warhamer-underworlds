import {ActivationToken, Card} from '../store/gameReducer'

export const getActiveActivationTokensCount = (activationTokens: ActivationToken[]) => {
  return getActiveActivationTokens(activationTokens).length;
};

export const getActiveActivationTokens = (activationTokens: ActivationToken[] = []) => {
  return activationTokens.filter(({isActive}) => isActive);
};

export const getCardLossesCount = (cards: Card[]) => {
  return cards.length - weedOutDeadCards(cards).length;
};

export const weedOutDeadCards = (cards: Card[]) => {
  return cards.filter(({healthPoints}) => {
    return !!healthPoints;
  });
};

export const makePublicUrl = (url: string) => process.env.PUBLIC_URL + url;
export const makeImageIconUrl = (name: string) => makePublicUrl(`/images/icons/${name}.png`);
export const makeImageFighterUrl = (name: string) => makePublicUrl(`/images/fighters/${name}.png`);
export const makeImageWarBandUrl = (name: string) => makePublicUrl(`/images/war-bands/${name}.png`);
export const makeImageCardUrl = (name: string, lang: "en" | "ru") => makePublicUrl(`/images/cards/${lang}/${name}.jpg`);

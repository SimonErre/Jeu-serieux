export class tipsModel {
   //const list of tips
   tips = [
       'Se battre dans la rue n\'est pas toujours la bonne solution',
       'Il existe des endroits pour se défouler',
       'Observez bien ! Essayez d\'évaluer la situation avant de vous décider',
       'Il existe plusieurs types de violance, les connaissez-vous ?',
       'La violence n\'est pas toujours la solution. Choisissez vos combats avec sagesse.',
       'Observez, réfléchissez, agissez. Une stratégie bien pensée peut changer la donne.',
       'La colère aveugle peut mener à la défaite. Gardez la tête froide, même dans l\'adversité.',
       'Les mots peuvent être aussi puissants que les coups. Choisissez-les judicieusement.',
       'La bravoure réside parfois dans la retenue. Ne sous-estimez jamais le pouvoir de la diplomatie.',
   ]

    constructor() {

    }

    //return a random tip
    getTip() {
        return this.tips[Math.floor(Math.random() * this.tips.length)];
    }



}
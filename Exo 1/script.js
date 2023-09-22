/*         EXERCICE CONDITION
 * declarer trois variable a=4,b=4,c=3
 * a sera l'expression de reference 
 * si a est egal à b alors faire un console log('egal à b')
 * si a est egal à c alors faire un console log('egal à c')
 * par defaut il y a un console log("egal à rien")
 */
let a = 4; // Définition des variables
let b = 4;
let c = 3;

switch(a){ // Vérifications de a avec les autres
    case b:
        console.log("a est égal à b");
        break;
    case c:
        console.log("a est égal à c");
        break;
    default: // Si aucun cas vérifié, on retourne automatiquement ça
        console.log("a n'est égal à rien");
}
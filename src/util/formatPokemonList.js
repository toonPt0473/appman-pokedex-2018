const formatHP = (value = '') => {
  const hp = Number(value)
  if (!hp) {
    return 0
  }
  return hp > 100 ? 100 : hp
}

const multiplyValue = (value = [], multi) => {
  const newValue = value.length * multi
  return newValue > 100 ? 100 : newValue
}

const calculateDmg = (value = []) => {
  return value.reduce((sumDmg, currentValue) => {
    if (!currentValue.damage) {
      return sumDmg
    }
    const dmg = currentValue.damage.replace(/\D/g,'')
    return sumDmg + Number(dmg)
  }, 0)
}

export default (data = []) => {
  return data.map(item => {
    const hp = formatHP(item.hp)
    const attacks = multiplyValue(item.attacks, 50)
    const weaknesses = multiplyValue(item.weaknesses, 100)
    const damage = calculateDmg(item.attacks)
    const happiness = ((hp / 10) + (damage /10 ) + 10 - (weaknesses)) / 5
    return {
      ...item,
      hp,
      str: `${attacks}`,
      weak: `${weaknesses}`,
      dmg: damage,
      happiness,
    }
  })
}

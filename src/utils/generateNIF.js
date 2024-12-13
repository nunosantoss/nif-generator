export const generateNIF = (nifType) => {
    let nifArray = [];
  
    // Geração com base no tipo de NIF selecionado
    if (nifType === "singular") {
      const firstDigit = Math.floor(Math.random() * 3) + 1; // Gera 1, 2 ou 3
      nifArray.push(firstDigit);
      for (let i = 1; i < 8; i++) {
        nifArray.push(Math.floor(Math.random() * 10)); // Gera dígitos entre 0 e 9
      }
    } else if (nifType === "nao-residente") {
      nifArray.push("4", "5"); // Começa com "45" para não residentes
      for (let i = 2; i < 8; i++) {
        nifArray.push(Math.floor(Math.random() * 10));
      }
    } else if (nifType === "coletiva") {
      nifArray.push("5"); // Começa com "5" para pessoas coletivas
      for (let i = 1; i < 8; i++) {
        nifArray.push(Math.floor(Math.random() * 10));
      }
    } else if (nifType === "organismo") {
      nifArray.push("6"); // Organismos da Administração Pública
      for (let i = 1; i < 8; i++) {
        nifArray.push(Math.floor(Math.random() * 10));
      }
    } else if (nifType === "heranca") {
      const herancaTypes = ["70", "74", "75"];
      const selectedHeranca = herancaTypes[Math.floor(Math.random() * herancaTypes.length)];
      nifArray.push(...selectedHeranca.split('').map(Number)); // Adiciona os dígitos da herança
      for (let i = 2; i < 8; i++) {
        nifArray.push(Math.floor(Math.random() * 10));
      }
    } else if (nifType === "fundos") {
      nifArray.push("7", "2"); // Começa com "72" para fundos de investimento
      for (let i = 2; i < 8; i++) {
        nifArray.push(Math.floor(Math.random() * 10));
      }
    } else if (nifType === "sociedades") {
      nifArray.push("9", "9"); // Sociedades civis sem personalidade jurídica
      for (let i = 2; i < 8; i++) {
        nifArray.push(Math.floor(Math.random() * 10));
      }
    }
  
    const controlDigit = calculateControlDigit(nifArray);
    nifArray.push(controlDigit);
    return nifArray.join("");
  };
  
  const calculateControlDigit = (nifArray) => {
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = nifArray.reduce(
      (acc, digit, index) => acc + digit * weights[index],
      0
    );
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };
  

export const formatCEP = (cep: string) => {
  // Lógica de formatação do CEP
  // Por exemplo: 12345678 -> 12345-678
  const cleanedcep = cep.replace(/\D/g, "");
  const matchcep = cleanedcep.match(/^(\d{5})(\d{3})$/);
  if (matchcep) return `${matchcep[1]}-${matchcep[2]}`;

  if (cep.length === 8 && cep.includes("-")) {
    const newcep = cep.replace("-", "");
    return newcep;
  }
  if (cep.length > 9) {
    return cep.slice(0, -1);
  }
};
export const formatPhoneNumber = (value: string): string => {
    const cleanedValue = value.replace(/\D/g, "");
    const match = cleanedValue.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return cleanedValue;
  };

  export const formatcpfcnpj = (value: string): string => {
    const cleanedValue = value.replace(/\D/g, "");
    const matchcpf = cleanedValue.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
    const matchcnpj = cleanedValue.match(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/
    );
    if (matchcpf) {
      return `${matchcpf[1]}.${matchcpf[2]}.${matchcpf[3]}-${matchcpf[4]}`;
    } else if (matchcnpj) {
      return `${matchcnpj[1]}.${matchcnpj[2]}.${matchcnpj[3]}/${matchcnpj[4]}-${matchcnpj[5]}`;
    }
    return cleanedValue;
  };
 export const formatDate = (date: string) => {
    console.log(date);

    let cleanedDate = date.replace(/\D/g, "");
    if (cleanedDate.length > 6) {
      cleanedDate = cleanedDate.slice(0, -1);
    }

    const match = cleanedDate.match(/^(\d{2})(\d{4})$/);
    if (match) {
      return `${
        Number.parseInt(match[1].toString()) === 0 ||
        Number.parseInt(match[1].toString()) > 12
          ? "01"
          : match[1]
      }/${match[2]}`;
    }
    if (cleanedDate.length < 5 && cleanedDate.includes("/")) {
      return cleanedDate.replace("/", "");
    }
  };

  export const formatCVV = (cvv: string) => {
    const cleanedCVV = cvv.replace(/\D/g, "");
    if (cleanedCVV.length > 3) {
      return cleanedCVV.slice(0, -1);
    } else {
      return cleanedCVV;
    }
  };
    export const formatpreco = (preco : string): string => {
      const formatpreco = preco.match(/^(\d{2,3})(\d{3})$/);

      if (formatpreco) {
        const format = formatpreco[1] + "." + formatpreco[2];
        return format;
      }
      return preco;
    };

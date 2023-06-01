// import React from "react";
// import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// import { Link } from "react-router-dom";

// const styles = StyleSheet.create({
//   page: {
//     padding: 40,
//   },
//   header: {
//     marginBottom: 20,
//     backgroundColor: "#D97706",
//     padding: 10,
//     textAlign: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   content: {
//     border: "1px solid #ccc",
//     padding: 15,
//     marginBottom: 10,
//   },
//   company: {
//     marginBottom: 20,
//   },
//   section: {
//     flexDirection: "row",
//     marginBottom: 5,
//   },
//   value: {
//     flex: 1,
//     textAlign: 'right',
//   },
//   companyName: {
//     fontWeight: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   table: {
//     marginBottom: 20,
//     border: "1px solid #ccc",
//   },
//   tableHeader: {
//     flexDirection: "row",
//     borderBottom: "1px solid #ccc",
//     padding: 10,
//     backgroundColor: "#D97706",
//     color: "#fff",
//   },
//   tableRow: {
//     flexDirection: "row",
//     padding: 10,
//     borderBottom: "1px solid #ccc",
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: "center",
//   },
//   total: {
//     flexDirection: "row",
//     marginBottom: 10,
//   },
//   totalLabel: {
//     flex: 1,
//     fontWeight: "bold",
//     color: "#D97706",
//   },
//   totalValue: {
//     flex: 1,
//     fontWeight: "bold",
//     textAlign: "right",
//     color: "#D97706",
//   },
//   message: {
//     marginTop: 20,
//     textAlign: "center",
//     color: "#D97706",
//   },
// });
// const productos =
//   [
//     { name: "Producto 1", quantity: 2, price: 10 },
//     { name: "Producto 2", quantity: 1, price: 15 },
//     { name: "Producto 3", quantity: 3, price: 8 },
//   ];

// const comprador = {
//   name: 'Alan David',
//   lastName: 'Almeida',
//   id: '43 842 321',
//   email: 'AlanDAlmeida@gmail.com'
// }

// const Invoice = ({ products = productos }, { buyer = comprador }) => {
//   const items = products.map(prod => ({
//     name: prod.name,
//     quantity: prod.quantity,
//     price: prod.price
//   }
//   ))

//   const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
//   const tax = subtotal * 0.19;
//   const total = subtotal + tax;

//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Peris-Factura</Text>
//         </View>
//         <View style={styles.content}>
//           <View style={styles.company}>
//             <Text style={styles.companyName}> Peris-Feria</Text>
//           </View>

//           <View style={styles.content}>

//             <View style={styles.section}>
//               <Text style={styles.label}>Nombre:</Text>
//               <Text style={styles.value}>{buyer.name}</Text>
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.label}>Apellido:</Text>
//               <Text style={styles.value}>{buyer.lastName}</Text>
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.label}>Identificación:</Text>
//               <Text style={styles.value}>{buyer.id}</Text>
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.label}>Correo:</Text>
//               <Text style={styles.value}>{buyer.email}</Text>
//             </View>
//           </View>
//           <View style={styles.table}>
//             <View style={styles.tableHeader}>
//               <Text style={styles.tableCell}>Item</Text>
//               <Text style={styles.tableCell}>Cantidad</Text>
//               <Text style={styles.tableCell}>Precio Unidad</Text>
//               <Text style={styles.tableCell}>Precio Total</Text>
//             </View>
//             {items.map((item, index) => (
//               <View key={index} style={styles.tableRow}>
//                 <Text style={styles.tableCell}>{item.name}</Text>
//                 <Text style={styles.tableCell}>{item.quantity}</Text>
//                 <Text style={styles.tableCell}>${item.price}</Text>
//                 <Text style={styles.tableCell}>${item.price * item.quantity}</Text>
//               </View>
//             ))}
//           </View>
//           <View style={styles.total}>
//             <Text style={styles.totalLabel}>Subtotal:</Text>
//             <Text style={styles.totalValue}>${subtotal}</Text>
//           </View>
//           <View style={styles.total}>
//             <Text style={styles.totalLabel}>Impuesto IVA (19%):</Text>
//             <Text style={styles.totalValue}>${tax}</Text>
//           </View>
//           <View style={styles.total}>
//             <Text style={styles.totalLabel}>Total:</Text>
//             <Text style={styles.totalValue}>${total}</Text>
//           </View>
//           <View style={styles.message}>
//             <Text>Gracias por tu compra.</Text>
//           </View>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// const ExportToPDF = () => {
//   const currentDate = new Date();
//   const formattedDate = currentDate.toISOString().split("T")[0];
//   const fileName = `Peris-fact_${formattedDate}.pdf`;
//   return (
//     <div className="flex flex-col h-[100vh] w-[100vwh] items-center justify-center">
//       <div className="flex w-10 h-10 -mt-24 z-10">
//         <Link to="/store" className="text-gray-500 hover:text-primary hover:scale-110 mb-2 ">
//           <svg className="w-8 h-8  mr-2" stroke="currentColor">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M10 19l-7-7m0 0l7-7m-7 7h18"
//             />
//           </svg>
//         </Link>
//       </div>


//       <div className="text-center min-h-[100px] min-w-[100px] fixed  border border-gray-200 rounded-3xl p-20 uppercase flex items-center">
//         <PDFDownloadLink className="text-2xl hover:text-primary font-bold p-4" document={<Invoice />} fileName={fileName}>
//           {({ blob, url, loading, error }) =>
//             loading ? "Generando PDF..." : error ? "Error al generar la factura" : "Descarga tu Peris-factura"
//           }
//         </PDFDownloadLink>
//       </div>
//     </div>
//   );
// }

// export default ExportToPDF;
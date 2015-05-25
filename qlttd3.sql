-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 13, 2015 at 04:40 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `qlttd3`
--
CREATE DATABASE IF NOT EXISTS `qlttd3` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `qlttd3`;

-- --------------------------------------------------------

--
-- Table structure for table `congtodien`
--

CREATE TABLE IF NOT EXISTS `congtodien` (
  `macongto` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `matram` int(11) NOT NULL,
  `mamucdich` int(11) NOT NULL,
  `makhachhang` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `chisocot` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `chisomoinhat` decimal(8,0) DEFAULT NULL,
  `ngayghinhancuoicung` date DEFAULT NULL,
  `trangthai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`macongto`),
  KEY `fk_relationship_3` (`mamucdich`),
  KEY `fk_relationship_8` (`makhachhang`),
  KEY `fk_thuoc` (`matram`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `congtodien`
--

INSERT INTO `congtodien` (`macongto`, `matram`, `mamucdich`, `makhachhang`, `chisocot`, `chisomoinhat`, `ngayghinhancuoicung`, `trangthai`) VALUES
('CTD00001', 1, 10, 'KH00001', 'A1', '1600', '2015-05-05', 1),
('CTD00003', 5, 7, 'KH00010', 'A1', '323', '2015-05-05', 1),
('CTD00004', 2, 1, 'KH00004', 'A1', '200', '2015-05-05', 1),
('CTD00005', 3, 8, 'KH00008', 'A15', '679', '2015-05-05', 1),
('CTD00006', 4, 6, 'KH00005', 'A1', '501', '2015-05-05', 1),
('CTD00007', 4, 1, 'KH00006', 'A1', '200', '2015-05-05', 1),
('CTD00008', 4, 9, 'KH00009', 'A1', '302', '2015-05-05', 1),
('CTD00009', 3, 3, 'KH00011', 'B1', '57', '2015-05-05', 1),
('CTD00010', 3, 3, 'KH00007', 'HS8', '178', '2015-05-05', 1),
('CTD00012', 3, 3, 'KH00001', 'BA67', '300', '2015-05-05', 1),
('CTD00014', 3, 6, 'KH00012', '45D', '55', '2015-05-05', 1),
('CTD00015', 4, 26, 'KH00013', 'B9', '67', '2015-05-05', 1),
('CTD00016', 5, 26, 'KH00014', 'HW5', '90', '2015-05-05', 1),
('CTD00017', 3, 26, 'KH00001', 'W89', '750', '2015-05-05', 1),
('CTD00018', 1, 27, 'KH00015', 's', '0', '2015-05-05', 1);

-- --------------------------------------------------------

--
-- Table structure for table `dieukhoansudung`
--

CREATE TABLE IF NOT EXISTS `dieukhoansudung` (
  `madieukhoan` int(11) NOT NULL AUTO_INCREMENT,
  `tendieukhoan` text COLLATE utf8_unicode_ci NOT NULL,
  `noidung` text COLLATE utf8_unicode_ci NOT NULL,
  `ghichu` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`madieukhoan`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `dieukhoansudung`
--

INSERT INTO `dieukhoansudung` (`madieukhoan`, `tendieukhoan`, `noidung`, `ghichu`) VALUES
(1, 'Luật điện lực', '<table border="0" cellpadding="0" cellspacing="0" style="height:141px; width:742px">\n	<tbody>\n		<tr>\n			<td style="width:167.4pt">\n			<p style="text-align:center"><strong>QUỐC HỘI<br />\n			--------</strong></p>\n			</td>\n			<td style="width:281.55pt">\n			<p style="text-align:center"><strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM<br />\n			Độc lập - Tự do - Hạnh phúc<br />\n			----------------</strong></p>\n			</td>\n		</tr>\n		<tr>\n			<td style="width:167.4pt">\n			<p style="text-align:center">Luật số: 24/2012/QH13</p>\n			</td>\n			<td style="width:281.55pt">\n			<p style="text-align:right"><em>Hà Nội, ngày 20 tháng 11 năm 2012</em></p>\n			</td>\n		</tr>\n	</tbody>\n</table>\n\n<p style="text-align:center"><strong>&nbsp;</strong></p>\n\n<p style="text-align:center"><strong><span style="font-size:12.0pt">LUẬT</span></strong></p>\n\n<p style="text-align:center">SỬA ĐỔI, BỔ SUNG MỘT SỐ ĐIỀU CỦA LUẬT ĐIỆN LỰC</p>\n\n<p><em>Căn cứ Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam năm 1992 đã được sửa đổi, bổ sung một số điều theo Nghị quyết số 51/2001/QH10;</em></p>\n\n<p><em>Quốc hội ban hành Luật sửa đổi, bổ sung một số điều của Luật điện lực số 28/2004/QH11,</em></p>\n\n<p><a name="chuong_1"><strong>Điều 1.</strong></a></p>\n\n<p>Sửa đổi, bổ sung một số điều của Luật điện lực như sau:</p>\n\n<p><a name="dieu_1">1. Bổ sung khoản 17 và khoản 18 vào Điều 3 như sau:</a></p>\n\n<p>“17. <em>Giá bán buôn điện</em> là giá bán điện của đơn vị điện lực này bán cho đơn vị điện lực khác để bán lại.</p>\n\n<p>18. <em>Giá bán lẻ điện</em> là giá bán điện của đơn vị điện lực bán cho khách hàng sử dụng điện.”</p>\n\n<p><a name="dieu_2">2. Bổ sung khoản 1a vào sau khoản 1; sửa đổi, bổ sung khoản 3 và khoản 4 Điều 4 như sau:</a></p>\n\n<p>“1a. Ưu tiên phát triển điện phục vụ nông thôn, miền núi, biên giới, hải đảo và vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn.</p>\n\n<p>3. Áp dụng tiến bộ khoa học và công nghệ trong hoạt động điện lực, sử dụng điện nhằm tiết kiệm, nâng cao hiệu quả sử dụng các nguồn năng lượng, bảo vệ môi trường; khuyến khích nghiên cứu, phát triển, sản xuất và sử dụng thiết bị hiện đại phục vụ yêu cầu phát triển điện lực.</p>\n\n<p>4. Đẩy mạnh việc khai thác và sử dụng các nguồn năng lượng mới, năng lượng tái tạo để phát điện; có chính sách ưu đãi đối với dự án đầu tư phát triển nhà máy phát điện sử dụng các nguồn năng lượng mới, năng lượng tái tạo.”</p>\n\n<p><a name="dieu_3">3. Khoản 1 và khoản 3 Điều 8 được sửa đổi, bổ sung như sau:</a></p>\n\n<p>“1. Quy hoạch phát triển điện lực là quy hoạch chuyên ngành bao gồm quy hoạch phát triển điện lực quốc gia và quy hoạch phát triển điện lực tỉnh, thành phố trực thuộc trung ương. Quy hoạch phát triển điện lực được lập, phê duyệt để làm cơ sở cho các hoạt động đầu tư phát triển điện lực và được điều chỉnh phù hợp với điều kiện kinh tế - xã hội trong từng thời kỳ. Quy hoạch phát triển điện lực phải hợp với quy hoạch các nguồn năng lượng sơ cấp cho phát điện gồm cả nguồn năng lượng mới, năng lượng tái tạo và có tính đến quy hoạch khác có liên quan theo quy định của pháp luật.</p>\n\n<p>3. Quy hoạch phát triển điện lực tỉnh, thành phố trực thuộc trung ương được lập trên cơ sở quy hoạch tổng thể phát triển kinh tế - xã hội của địa phương và phải phù hợp với quy hoạch phát triển điện lực quốc gia. Quy hoạch phát triển điện lực tỉnh, thành phố trực thuộc trung ương được lập cho từng giai đoạn mười năm và có định hướng cho mười năm tiếp theo.”</p>\n\n<p><a name="dieu_4">4. Bổ sung Điều 8a vào sau Điều 8 như sau:</a></p>\n\n<p><strong>“Điều 8a. Nội dung quy hoạch phát triển điện lực</strong></p>\n\n<p>1. Quy hoạch phát triển điện lực quốc gia bao gồm những nội dung chính sau đây:</p>\n\n<p>a) Tổng quan về tình hình phát triển kinh tế - xã hội và hệ thống năng lượng quốc gia trong giai đoạn quy hoạch;</p>\n\n<p>b) Dự báo nhu cầu điện;</p>\n\n<p>c) Đánh giá các nguồn năng lượng sơ cấp, khả năng khai thác, khả năng xuất nhập khẩu năng lượng; đánh giá khả năng trao đổi điện giữa các vùng, miền; dự báo giá nhiên liệu cho sản xuất điện;</p>\n\n<p>d) Chương trình phát triển điện lực quốc gia bao gồm chương trình chi tiết cho phát triển nguồn điện, phát triển lưới điện, liên kết lưới điện với các nước trong khu vực, phát triển điện nông thôn, phát triển nguồn năng lượng mới, năng lượng tái tạo và các nội dung khác liên quan;</p>\n\n<p>đ) Tổng hợp khối lượng xây dựng và vốn đầu tư cho chương trình phát triển điện lực quốc gia, phân tích kinh tế - tài chính chương trình phát triển điện lực quốc gia;</p>\n\n<p>e) Bảo vệ môi trường và phòng, chống thiên tai;</p>\n\n<p>g) Dự kiến quỹ đất cho công trình điện lực;</p>\n\n<p>h) Cơ chế, chính sách, giải pháp bảo đảm thực hiện chương trình phát triển điện lực quốc gia trong giai đoạn quy hoạch.</p>\n\n<p>2. Quy hoạch phát triển điện lực tỉnh, thành phố trực thuộc trung ương bao gồm những nội dung chính sau đây:</p>\n\n<p>a) Quy hoạch, định hướng và mục tiêu phát triển kinh tế - xã hội của tỉnh, thành phố trực thuộc trung ương trong giai đoạn quy hoạch;</p>\n\n<p>b) Dự báo nhu cầu điện chi tiết cho các huyện, quận, thị xã, thành phố thuộc tỉnh trong giai đoạn quy hoạch;</p>\n\n<p>c) Đánh giá tiềm năng phát triển các nguồn điện tại địa phương bao gồm cả nguồn điện sử dụng năng lượng mới, năng lượng tái tạo; khả năng trao đổi điện năng với các khu vực lân cận;</p>\n\n<p>d) Đánh giá hiện trạng cung cấp điện tại địa phương, đặc biệt là vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn;</p>\n\n<p>đ) Chương trình phát triển nguồn, lưới điện của tỉnh, thành phố trực thuộc trung ương cho các giai đoạn lập quy hoạch; thiết kế sơ đồ phát triển lưới điện chi tiết cho các huyện, quận, thị xã, thành phố thuộc tỉnh;</p>\n\n<p>e) Bảo vệ môi trường và phòng, chống thiên tai;</p>\n\n<p>g) Tổng hợp khối lượng xây dựng và vốn đầu tư cho phương án quy hoạch phát triển điện được chọn, phân tích kinh tế - tài chính phương án được chọn;</p>\n\n<p>h) Dự kiến quỹ đất cho công trình điện lực;</p>\n\n<p>i) Cơ chế chính sách, giải pháp bảo đảm thực hiện quy hoạch phát triển điện lực tỉnh, thành phố trực thuộc trung ương trong giai đoạn quy hoạch.”</p>\n\n<p><a name="dieu_5">5. Sửa đổi, bổ sung tên Điều 9 và nội dung khoản 1, khoản 2 Điều 9 như sau:</a></p>\n\n<p><strong>“Điều 9. Lập, phê duyệt, công bố và điều chỉnh quy hoạch phát triển điện lực</strong></p>\n\n<p>1. Bộ Công thương tổ chức lập quy hoạch phát triển điện lực quốc gia trình Thủ tướng Chính phủ phê duyệt; công bố và hướng dẫn, theo dõi, kiểm tra việc thực hiện quy hoạch phát triển điện lực quốc gia đã được phê duyệt; quy định cụ thể nội dung, trình tự, thủ tục lập, thẩm định, điều chỉnh quy hoạch phát triển điện lực và hướng dẫn lập kế hoạch triển khai thực hiện.</p>\n\n<p>2. Ủy ban nhân dân tỉnh, thành phố trực thuộc trung ương (sau đây gọi chung là Ủy ban nhân dân cấp tỉnh) tổ chức lập quy hoạch phát triển điện lực tỉnh, thành phố trực thuộc trung ương trình Hội đồng nhân dân cùng cấp thông qua trước khi trình Bộ trưởng Bộ Công thương phê duyệt; công bố và hướng dẫn, theo dõi, kiểm tra việc thực hiện quy hoạch phát triển điện lực tỉnh, thành phố trực thuộc trung ương đã được phê duyệt.”</p>\n\n<p><a name="dieu_6">6. Khoản 1 Điều 11 được sửa đổi, bổ sung như sau:</a></p>\n\n<p>“1. Đầu tư phát triển điện lực phải phù hợp với quy hoạch phát triển điện lực. Dự án đầu tư chưa có trong quy hoạch phát triển điện lực chỉ được thực hiện khi cơ quan lập quy hoạch phát triển điện lực trình cấp có thẩm quyền phê duyệt quy hoạch cho phép.”</p>\n\n<p><a name="dieu_7">7. Điểm đ khoản 1 Điều 16 được sửa đổi, bổ sung như sau:</a></p>\n\n<p>“đ) Tổ chức kiểm toán năng lượng điện theo định kỳ và thực hiện các giải pháp điều chỉnh sau khi có kết luận kiểm toán theo quy định của pháp luật về sử dụng năng lượng tiết kiệm hiệu quả.”</p>\n\n<p><a name="dieu_8">8. Khoản 2 Điều 18 được sửa đổi, bổ sung như sau:</a></p>\n\n<p>“2. Thủ tướng Chính phủ quy định điều kiện, cơ cấu ngành điện để hình thành và phát triển các cấp độ thị trường điện lực; quy định lộ trình phát triển thị trường điện lực, rà soát và điều chỉnh đẩy nhanh lộ trình phù hợp với tình hình kinh tế - xã hội theo từng thời kỳ.”</p>\n\n<p><a name="dieu_9">9. Khoản 6 Điều 23 được sửa đổi, bổ sung như sau:</a></p>\n\n<p>“6. Trong trường hợp bên mua điện không trả tiền điện và đã được bên bán điện thông báo hai lần thì sau mười lăm ngày, kể từ ngày thông báo lần đầu tiên, bên bán điện có quyền ngừng cấp điện. Bên bán điện phải thông báo thời điểm ngừng cấp điện cho bên mua điện trước 24 giờ và không chịu trách nhiệm về thiệt hại do việc ngừng cấp điện gây ra.”</p>\n\n<p><a name="dieu_10">10. Khoản 2 Điều 24 được sửa đổi, bổ sung như sau:</a></p>\n\n<p>“2. Thiết bị đo đếm điện phải bảo đảm yêu cầu kỹ thuật đo lường và được kiểm định, hiệu chuẩn, thử nghiệm theo quy định của pháp luật về đo lường.”</p>\n\n<p><a name="dieu_11">11. Sửa đổi, bổ sung tên Điều 25 và nội dung khoản 1, khoản 2 Điều 25 như sau:</a></p>\n\n<p><strong>“Điều 25. Kiểm định, hiệu chuẩn, thử nghiệm thiết bị đo đếm điện</strong></p>\n\n<p>1. Chỉ những tổ chức kiểm định, hiệu chuẩn, thử nghiệm đã đăng ký hoặc được chỉ định theo quy định của pháp luật về đo lường mới được phép kiểm định, hiệu chuẩn, thử nghiệm thiết bị đo đếm điện.</p>\n\n<p>2. Bên bán điện có trách nhiệm tổ chức việc kiểm định, hiệu chuẩn, thử nghiệm thiết bị đo đếm điện theo đúng yêu cầu và thời hạn quy định của pháp luật về đo lường.”</p>\n\n<p><a name="dieu_12">12. Điểm c khoản 2 Điều 28 được sửa đổi, bổ sung như sau:</a></p>\n\n<p>“c) Không làm tổn hại đến lợi ích của khách hàng sử dụng điện, lợi ích của Nhà nước và an ninh năng lượng quốc gia.”</p>\n\n<p><a name="dieu_13">13. Bổ sung khoản 1a vào sau khoản 1; sửa đổi, bổ sung khoản 3 và khoản 4 Điều 29 như sau:</a></p>\n\n<p>“1a. Giá bán điện thực hiện theo cơ chế thị trường có sự điều tiết của Nhà nước phù hợp với cấp độ phát triển của thị trường điện lực.</p>\n\n<p>3. Thực hiện cơ cấu biểu giá bán lẻ điện hợp lý đối với các nhóm khách hàng; Nhà nước hỗ trợ giá bán lẻ điện cho mục đích sinh hoạt đối với hộ nghèo, hộ chính sách xã hội theo tiêu chí do Thủ tướng Chính phủ quy định phù hợp với tình hình kinh tế - xã hội từng thời kỳ.</p>\n\n<p>4. Bảo đảm quyền tự quyết định giá mua, bán điện trong khung giá, cơ cấu biểu giá bán lẻ điện do Nhà nước quy định của các đối tượng mua bán điện trên thị trường điện lực.”</p>\n\n<p><a name="dieu_14">14. Bổ sung khoản 6 vào Điều 30 như sau:</a></p>\n\n<p>“6. Báo cáo tài chính đã được kiểm toán hàng năm của đơn vị điện lực.”</p>\n\n<p><a name="dieu_15">15. Các khoản 1, 2 và 3 Điều 31 được sửa đổi, bổ sung như sau:</a></p>\n\n<p>“1. Giá bán lẻ điện do đơn vị bán lẻ điện xây dựng căn cứ khung giá của mức giá bán lẻ điện bình quân, cơ chế điều chỉnh giá và cơ cấu biểu giá bán lẻ điện do Thủ tướng Chính phủ quy định phù hợp với cấp độ phát triển của thị trường điện lực, trừ trường hợp quy định tại khoản 2 Điều 62 của Luật này.</p>\n\n<p>Bộ Công thương chủ trì, phối hợp với Bộ Tài chính xây dựng khung giá của mức giá bán lẻ điện bình quân, cơ chế điều chỉnh giá và cơ cấu biểu giá bán lẻ điện trình Thủ tướng Chính phủ quyết định.</p>\n\n<p>Việc điều chỉnh giá bán lẻ điện phải được thực hiện công khai, minh bạch về sự biến đổi của các yếu tố cấu thành liên quan đến việc điều chỉnh giá. Nhà nước sử dụng các biện pháp để bình ổn giá bán điện phù hợp với quy định của pháp luật về giá.</p>\n\n<p>2. Khung giá phát điện, khung giá bán buôn điện, giá truyền tải điện, giá dịch vụ phụ trợ hệ thống điện, phí điều độ vận hành hệ thống điện và phí điều hành giao dịch thị trường điện lực do đơn vị điện lực có liên quan xây dựng; cơ quan điều tiết điện lực thẩm định trình Bộ trưởng Bộ Công thương, Bộ trưởng Bộ Tài chính phê duyệt theo sự phân công của Chính phủ, trừ trường hợp quy định tại khoản 2 Điều 62 của Luật này.</p>\n\n<p>Bộ Công thương chủ trì, phối hợp với Bộ Tài chính hướng dẫn phương pháp lập khung giá phát điện, khung giá bán buôn điện, giá truyền tải điện, giá dịch vụ phụ trợ hệ thống điện, phí điều độ vận hành hệ thống điện và phí điều hành giao dịch thị trường điện lực.</p>\n\n<p>3. Giá phát điện theo hợp đồng mua bán điện có thời hạn, giá bán buôn điện do các đơn vị điện lực thỏa thuận nhưng không được vượt quá khung giá phát điện, khung giá bán buôn điện đã được phê duyệt.”</p>\n\n<p><a name="dieu_16">16. Sửa đổi, bổ sung khoản 1 và khoản 4; bổ sung khoản 5 vào Điều 32 như sau:</a></p>\n\n<p>“1. Tổ chức, cá nhân được cấp giấy phép để thực hiện một hoặc nhiều lĩnh vực hoạt động điện lực.</p>\n\n<p>4. Chính phủ quy định cụ thể điều kiện cấp giấy phép đối với từng lĩnh vực hoạt động điện lực.</p>\n\n<p>5. Bộ Công thương quy định trình tự, thủ tục cấp, gia hạn, sửa đổi, bổ sung và thời hạn giấy phép hoạt động điện lực đối với từng lĩnh vực hoạt động điện lực.”</p>\n\n<p><a name="dieu_17">17. Điểm a khoản 2 Điều 39 được sửa đổi, bổ sung như sau:</a></p>\n\n<p>“a) Tuân thủ quy trình, quy chuẩn kỹ thuật về vận hành nhà máy điện, lưới điện; đối với nhà máy thủy điện còn phải tuân thủ quy định về an toàn đập thủy điện và vận hành hồ chứa nước;”</p>\n\n<p><a name="dieu_18">18. Điểm c khoản 1 Điều 44 được sửa đổi, bổ sung như sau:</a></p>\n\n<p>“c) Định giá bán trên thị trường bán lẻ điện cạnh tranh theo quy định tại khoản 1 Điều 31 của Luật này, trừ trường hợp quy định tại khoản 2 Điều 62 của Luật này.”</p>\n\n<p><a name="dieu_19">19. Sửa đổi, bổ sung tên Điều 49; bổ sung khoản 4 vào Điều 49 như sau:</a></p>\n\n<p><strong>“Điều 49. Trách nhiệm phối hợp thực hiện khi xây dựng, cải tạo, kết thúc sử dụng công trình điện lực và các công trình khác</strong></p>\n\n<p>4. Khi không còn khai thác, sử dụng thì công trình điện lực phải được xử lý, quản lý bảo đảm an toàn theo quy định của Chính phủ.”</p>\n\n<p><a name="dieu_20">20. Khoản 1 Điều 54 được sửa đổi, bổ sung như sau:</a></p>\n\n<p>“1. Nhà máy điện, trạm phát điện phải được bảo vệ nghiêm ngặt, xung quanh phải có tường rào bảo vệ, biển báo an toàn về điện, về phòng cháy, chữa cháy; những người không có nhiệm vụ không được phép vào nhà máy điện, trạm phát điện.</p>\n\n<p>Hồ chứa nước, đập thủy điện và các công trình phụ trợ phục vụ nhà máy thủy điện phải được xây dựng, quản lý, bảo vệ bảo đảm an toàn vận hành nhà máy thủy điện và vùng hạ du. Nghiêm cấm các hành vi lấn chiếm đập thủy điện, lòng hồ, làm ô nhiễm nguồn nước và ảnh hưởng đến khả năng phát điện.”</p>\n\n<p><a name="dieu_21">21. Bổ sung Điều 59a vào sau Điều 59 như sau:</a></p>\n\n<p><strong>“Điều 59a. Xử lý sự cố điện</strong></p>\n\n<p><a name="khoan_1">1. Trường hợp xảy ra sự cố điện, đơn vị điện lực trong phạm vi nhiệm vụ, quyền hạn của mình có trách nhiệm xử lý theo quy định của pháp luật.</a></p>\n\n<p>2. Trường hợp xảy ra sự cố điện nghiêm trọng đến mức thảm họa lớn thì việc ban bố tình trạng khẩn cấp và áp dụng các biện pháp ứng phó phải thực hiện theo quy định của pháp luật về tình trạng khẩn cấp.”</p>\n\n<p><a name="dieu_22">22. Điều 62 được sửa đổi, bổ sung như sau:</a></p>\n\n<p><strong>“Điều 62. Giá bán điện ở nông thôn, miền núi, biên giới, hải đảo</strong></p>\n\n<p>1. Giá bán điện ở nông thôn, miền núi, biên giới, hải đảo khu vực nối lưới điện quốc gia được thực hiện theo quy định tại Điều 31 của Luật này.</p>\n\n<p>2. Giá bán điện ở nông thôn, miền núi, biên giới, hải đảo khu vực chưa nối lưới điện quốc gia được thực hiện như sau:</p>\n\n<p>a) Giá bán lẻ điện cho mục đích sinh hoạt do đơn vị điện lực có liên quan xây dựng, Ủy ban nhân dân cấp tỉnh quyết định phù hợp với cơ chế hỗ trợ giá bán lẻ điện cho mục đích sinh hoạt tại khu vực này do Thủ tướng Chính phủ quy định;</p>\n\n<p>b) Các loại giá điện khác do đơn vị điện lực có liên quan xây dựng, Ủy ban nhân dân cấp tỉnh quyết định theo nguyên tắc bảo đảm bù đắp đủ chi phí, có lợi nhuận hợp lý cho đơn vị điện lực trên cơ sở tham khảo ý kiến của cơ quan điều tiết điện lực.”</p>\n\n<p><a name="dieu_23">23. Sửa đổi, bổ sung các điểm đ, g và k khoản 1; bổ sung điểm m và điểm n khoản 1; sửa đổi, bổ sung khoản 2 Điều 66 như sau:</a></p>\n\n<p>“đ) Xây dựng khung giá của mức giá bán lẻ điện bình quân, cơ chế điều chỉnh giá và cơ cấu biểu giá bán lẻ điện; tổ chức thực hiện cơ chế, chính sách về giá điện;</p>\n\n<p>g) Quy định khung giá phát điện, khung giá bán buôn điện, phê duyệt giá truyền tải điện, giá dịch vụ phụ trợ hệ thống điện, phí điều độ vận hành hệ thống điện và phí điều hành giao dịch thị trường điện lực;</p>\n\n<p>k) Kiểm tra, giám sát việc điều chỉnh và thực hiện giá điện;</p>\n\n<p>m) Kiểm tra hợp đồng mua bán điện có thời hạn giữa đơn vị phát điện và đơn vị mua điện, hợp đồng mua bán buôn điện có thời hạn theo quy định của Chính phủ;</p>\n\n<p>n) Kiểm tra và xử lý vi phạm trong lĩnh vực điện lực theo quy định của pháp luật.</p>\n\n<p>2. Thủ tướng Chính phủ quy định cụ thể về tổ chức, chức năng, nhiệm vụ, quyền hạn của cơ quan điều tiết điện lực.”</p>\n\n<p><a name="dieu_24">24. Điều 67 được sửa đổi, bổ sung như sau:</a></p>\n\n<p><strong>“Điều 67. Thanh tra chuyên ngành điện lực</strong></p>\n\n<p>Thanh tra chuyên ngành điện lực thực hiện theo quy định của pháp luật về thanh tra.”</p>\n\n<p><a name="chuong_2"><strong>Điều 2.</strong></a></p>\n\n<p><a name="dieu_1_1">1. Sửa đổi một số từ ngữ của Luật điện lực như sau:</a></p>\n\n<p>a) Thay cụm từ “quy hoạch phát triển điện lực địa phương” bằng cụm từ “quy hoạch phát triển điện lực tỉnh, thành phố trực thuộc trung ương” tại khoản 2 Điều 10;</p>\n\n<p>b) Thay cụm từ “phi dịch vụ phụ trợ” bằng cụm từ “giá dịch vụ phụ trợ” tại điểm h khoản 1 Điều 21; thay cụm từ “các loại phí dịch vụ” bằng cụm từ “giá dịch vụ phụ trợ” tại điểm b khoản 2 Điều 21;</p>\n\n<p>c) Thay cụm từ “phí truyền tải điện” bằng cụm từ “giá truyền tải điện” tại điểm b khoản 1 Điều 40;</p>\n\n<p>d) Thay từ “quy phạm bằng cụm từ “quy chuẩn kỹ thuật” tại khoản 4 Điều 11; điểm b khoản 2 Điều 28 khoản 2 Điều 34; điểm đ khoản 1 Điều 39; điểm d khoản 1 Điều 40; điểm đ khoản 1 Điều 41; điểm b khoản 1 và điểm a khoản 2 Điều 45; điểm b khoản 5 và khoản 6 Điều 54; khoản 7 và khoản 8 Điều 55; các khoản 1, 2, 3 và 7 Điều 57; khoản 1 Điều 64;</p>\n\n<p>đ) Thay cụm từ “quy phạm kỹ thuật” bằng cụm từ “quy chuẩn kỹ thuật” tại khoản 12 Điều 3; khoản 5 Điều 55;</p>\n\n<p>e) Thay cụm từ “Bộ Công nghiệp” bằng cụm từ “Bộ Công thương” tại khoản 7 Điều 3; khoản 4 Điều 10; khoản 5 Điều 11; khoản 3 Điều 13; khoản 3 Điều 21; điểm b khoản 1 Điều 34; khoản 1 và khoản 2 Điều 38; khoản 1 và khoản 2 Điều 56; khoản 5 Điều 59; khoản 3 Điều 61; khoản 4 Điều 64; khoản 2 và khoản 3 Điều 65.</p>\n\n<p><a name="dieu_2_1">2. Bãi bỏ từ “thứ tự” tại khoản 1 Điều 18; bãi bỏ điểm b khoản 1 Điều 41; điểm e khoản 1 Điều 66 của Luật điện lực.</a></p>\n\n<p><a name="dieu_3_1">3. Bổ sung từ “minh bạch” vào sau cụm từ “Bảo đảm công khai” tại khoản 1 Điều 17 của Luật điện lực.</a></p>\n\n<p><a name="dieu_4_1">4. Bổ sung cụm từ “bảo đảm quyền lợi giữa các bên nhưng không trái với quy định của pháp luật” vào sau cụm từ “trừ trường hợp các bên có thỏa thuận khác” tại khoản 1 và khoản 3 Điều 24; vào cuối điểm i khoản 2 Điều 39, điểm e khoản 2 Điều 40 và điểm c khoản 2 Điều 41 của Luật điện lực.</a></p>\n\n<p><a name="dieu_5_1">5. Bổ sung từ “biên giới” vào sau cụm từ “nông thôn, miền núi” tại tên Chương VIII; tên các điều 60, 61 và 64; các khoản 1, 3 và 4 Điều 60; khoản 4 Điều 61; các khoản 1, 2 và 4 Điều 64 của Luật điện lực.</a></p>\n\n<p><a name="chuong_3"><strong>Điều 3.</strong></a></p>\n\n<p>1. Luật này có hiệu lực thi hành từ ngày 01 tháng 7 năm 2013.</p>\n\n<p>2. Chính phủ, cơ quan có thẩm quyền quy định chi tiết, hướng dẫn thi hành các điều, khoản được giao trong Luật.</p>\n\n<p><em>Luật này đã được Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam khóa XIII, kỳ họp thứ 4 thông qua ngày 20 tháng 11 năm 2012.</em></p>\n\n<p>&nbsp;</p>\n\n<table border="0" cellpadding="0" cellspacing="0" style="height:72px; width:749px">\n	<tbody>\n		<tr>\n			<td style="width:222.25pt">\n			<p style="text-align:center"><span style="font-size:8.0pt">&nbsp;</span></p>\n			</td>\n			<td style="width:222.3pt">\n			<p style="text-align:center"><strong>CHỦ TỊCH QUỐC HỘI<br />\n			Nguyễn Sinh Hùng</strong></p>\n			</td>\n		</tr>\n	</tbody>\n</table>\n', '');

-- --------------------------------------------------------

--
-- Table structure for table `gioithieuct`
--

CREATE TABLE IF NOT EXISTS `gioithieuct` (
  `id` int(11) NOT NULL,
  `noidung` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `gioithieuct`
--

INSERT INTO `gioithieuct` (`id`, `noidung`) VALUES
(1, '<div class="panel-body">\n<div style="text-align: center;"><span style="color:#800080"><span style="font-size:18px"><strong>Điện lực Thành phố Cần Thơ - Chi nhánh phường An Hòa, Quận Ninh Kiều, Thành Phố Cần Thơ</strong></span></span><br />\n<br />\n<br />\n<span style="font-size:14px"><strong><img alt="" src="http://localhost:8080/images/ct2.gif" style="height:317px; width:500px" /></strong></span><br />\n<span style="color:#0000FF"><em>Hình ảnh Điện lực TPCT</em></span> <em><span style="color:#0000FF">1</span></em></div>\n\n<div style="text-align: justify;">Thành phố Cần Thơ&nbsp;nằm ở trung tâm Đồng Bằng Sông Cửu Long, là Thành phố đầu mối giao thông, giao thương của các tỉnh trong vùng với hệ thống đường bộ, đường sông, đường biển và đường hàng không thuận lợi, nối liền với cả nước. Với vị trí quan trọng, Thành phố Cần Thơ đã phát triển kinh tế theo cơ cấu công nghiệp, nông nghiệp, dịch vụ phát triển của vùng kinh tế trọng điểm. Điện lực Thành phố Cần Thơ, có nhiều bước đi vững chắc, đã liên tục phát triển nguồn điện, lưới điện, cung cấp điện an toàn, liên tục góp phần tăng trưởng kinh tế, xã hội của Thành phố Cần Thơ và hoàn thành tốt nhiệm vụ sản xuất kinh doanh do Công ty Điện lực 2&nbsp; giao. Sự phát triển kinh tế, chính trị, xã hội ngày càng tăng, kéo theo nhu cầu sử dụng điện ngày càng lớn. Song song với sự phát triển về kinh tế, nguồn và lưới điện của Điện lực Thành phố Cần Thơ đã kịp thời phát triển để cung cấp điện cho các khách hàqng sản xuất tại các khu công nghiệp, các dự án do Trung ương, địa phương đầu tư trong lĩnh vực sản xuất, giao thông, chế biến và dịch vụ, cung cấp điện ánh sáng sinh hoạt đến tận hộ nhân dân. Sản lượng điện thương phẩm đạt vượt mức kế hoạch giao, tốc độ phát triển phụ tải cung cấp điện Thành phố Cần Thơ tăng hàng năm từ 12 --&gt; 17%.<br />\nĐiện Lực Thành phố Cần Thơ với chức năng phục vụ khách hàng gồm : Sản xuất kinh doanh điện năng Quản lý vận hành lưới điện 110 kV và lưới điện phân phối Tư vấn lập dự án đầu tư, thiết kế, đấu thầu đường dây và trạm biến áp đến cấp điện áp 35 kV Tư vấn giám sát thi công các công trình đường dây và trạm biến áp đến cấp điện áp 110 kV Xây dựng và cải tạo lưới điện đến 35 kV Sửa chữa, thí nghiệm các thiết bị điện đến 35 kV Đại lý các dịch vụ viễn thông công cộng Kinh doanh thiết bị viễn thông Xây lắp các công trình viễn thông công cộng Về nguồn điện : Thành phố Cần Thơ, ngoài hệ thống truyền tải Quốc gia còn có Nhà máy Nhiệt điện Cần Thơ cung cấp nguồn điện tổng cộng suất 183 MW nhằm đáp ứng nhu cầu phụ tải và nâng cao chất lượng điện năng của khu vực Đồng bằng Sông Cửu Long.<br />\nTổng Công ty Điện lực Việt Nam đã đầu tư xây dựng Nhà máy Nhiệt điện Ô Môn với 02 tổ máy 300 MW với các hạng mục đồng bộ về hệ thống truyền tải, trạm biến áp 220 KV, 110 KV của hệ thống điện Quốc gia từ &nbsp;vốn vay của Chính phủ Nhật Bản thông qua Ngân hàng Hợp tác Quốc tế Nhật Bản (JBIC). Về lưới điện : Với quy mô hệ thống điện gồm 5 trạm biến áp trung gian 110/22-15 kV, với tổng dung lượng là 176,6 MVA, đường dây 110 kV dài 66,5 km, đường dây 22-15 kV dài 1.181 km, đường dây hạ thế 0,2-0,4 kV dài 1.447 km và 3.370 máy biến áp phân phối tổng dung lượng 140.808 kVA.&nbsp; Hệ thống lưới điện đã phủ kín 4 quận, 4 huyện Thành phố Cần Thơ; Điện lực Cần Thơ đã góp phần cung cấp ổn định phục vụ phát triển kinh tế xã hội của Thành phố Cần Thơ.<br />\nDự án cải tạo và phát triển lưới điện phân phối Thành phố Cần Thơ theo hiệp định 1585 VIE (SF) của Chính phủ Việt Nam và Ngân hàng phát triển Châu Á nhằm nâng cấp lưới điện phân phối, nâng cao chất lượng điện năng, cung cấp điện cho TP Cần Thơ (cũ) với tổng mức đầu tư 260 tỷ đồng, đưa vào vận hành năm 2004 : Đường dây cáp ngầm trong nội ô Thành phố&nbsp;:&nbsp;24,0 km Đường dây cao áp 22 KV trên không&nbsp;:&nbsp;150,6 km Đường dây hạ áp hỗn hợp&nbsp;:&nbsp; 436,0 km Tổng công suất các trạm biến áp phân phối&nbsp;:&nbsp;89.327 kVA. Dự án đã được trang bị với hệ thống điều khiển SCADA và các thiết bị tiên tiến cho hệ thống phân phối lưới điện TP Cần Thơ.</div>\n\n<div style="text-align: center;"><img alt="" src="http://localhost:8080/images/ct1.jpg" style="height:400px; width:600px" /><br />\n<span style="color:#0000FF"><em>Hình ảnh Điện lực TPCT</em></span> <em><span style="color:#0000FF">2</span></em></div>\n\n<div style="text-align: justify;">Các năm qua, ngành điện và địa phương đã đầu tư hàng trăm tỷ đồng để thực hiện chương trình điện khí hóa các xã thuộc Thành phố Cần Thơ bằng nhiều nguồn vốn kể cả nguồn vốn do Thành phố ứng trước, nhằm cung cấp điện trực tiếp cho người dân nông thôn sử dụng điện cho nhu cầu sinh hoạt cũng như phát triển sản xuất nông thôn. Chương trình điện khí hoá nông thôn cũng được triển khai nhanh chóng từ các nguồn vốn vay của các tổ chức tài chính Quốc tế gồm quỹ hỗ trợ đầu tư phát triển Pháp AFD, điện khí hoá các xã theo dự án năng lượng nông thôn RE2 của WB. Kết quả đến nay tỷ lệ hộ dân có điện trong toàn Thành phố 91%. Trước nhu cầu sử dụng điện tăng nhanh của khách hàng, Điện lực Thành phố Cần Thơ thực hiện nhanh chóng và kịp thời các công trình sửa chữa lớn, đầu tư nâng cấp lưới điện phân phối, từ nguồn vốn khấu hao cơ bản, hàng trăm km đường dây trung - hạ thế, công suất các trạm biến thế đã được tăng cường đáp ứng nhu cầu sử dụng điện.<br />\nCác năm qua đã hoàn thành chỉ tiêu giảm tổn thất điện năng, năm 1996 tỷ lệ tổn thất điện năng là 12,84%, đến nay tỷ lệ giảm tổn thất điện năng của lưới truyền tải và phân phối chỉ còn dưới 9,00%. Đây là sự nổ lực của tập thể CBCNV Điện lực Thành phố Cần Thơ vì phải tiếp nhận khối lượng rất lớn lưới điện nông thôn và tăng cường công tác quản lý kỹ thuật. Lực lượng cán bộ, kỹ sư, công nhân kỹ thuật của Điện lực TP Cần Thơ không ngừng lớn mạnh và vững bước trên con đường đổi mới, có nhiều tiến bộ vượt bậc cả về số lượng và chất lượng, với tinh thần trách nhiệm cao, nâng cao phục vụ khách hàng, đáp ứng kịp thời nhu cầu sử dụng điện của khách hàng Thành phố Cần Thơ.<br />\n<strong>By Nguyễn Hải Đăng</strong></div>\n</div>\n');

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE IF NOT EXISTS `hoadon` (
  `mahoadon` int(11) NOT NULL AUTO_INCREMENT,
  `manhanvien` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `macongto` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `tungay` date DEFAULT NULL,
  `denngay` date DEFAULT NULL,
  `chisomoi` int(11) DEFAULT NULL,
  `chisocu` int(11) DEFAULT NULL,
  `chisothucthu` int(11) DEFAULT NULL,
  `thue` int(11) DEFAULT NULL,
  `thuthue` float NOT NULL,
  `thanhtoan` int(11) DEFAULT NULL,
  `tongthanhtoan` float DEFAULT NULL,
  `ngaylap` date DEFAULT NULL,
  `dathanhtoan` tinyint(1) DEFAULT NULL,
  `ngaythanhtoan` date DEFAULT NULL,
  PRIMARY KEY (`mahoadon`),
  KEY `fk_relationship_5` (`macongto`),
  KEY `fk_relationship_6` (`manhanvien`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=187 ;

--
-- Dumping data for table `hoadon`
--

INSERT INTO `hoadon` (`mahoadon`, `manhanvien`, `macongto`, `tungay`, `denngay`, `chisomoi`, `chisocu`, `chisothucthu`, `thue`, `thuthue`, `thanhtoan`, `tongthanhtoan`, `ngaylap`, `dathanhtoan`, `ngaythanhtoan`) VALUES
(103, 'NV0001', 'CTD00001', '2015-01-02', '2015-02-01', 390, 0, 390, 10, 72702, 727020, 799722, '2015-02-04', 1, '2015-02-04'),
(104, 'NV0001', 'CTD00003', '2015-01-02', '2015-02-01', 156, 5, 151, 10, 32087.5, 320875, 352962, '2015-02-04', 1, '2015-02-04'),
(105, 'NV0001', 'CTD00004', '2015-01-02', '2015-02-01', 90, 0, 90, 10, 12492, 124920, 137412, '2015-02-04', 1, '2015-02-04'),
(106, 'NV0001', 'CTD00005', '2015-01-02', '2015-02-01', 97, 40, 57, 10, 13035.9, 130359, 143395, '2015-02-04', 1, '2015-02-04'),
(107, 'NV0001', 'CTD00006', '2015-01-02', '2015-02-01', 235, 5, 230, 10, 37490, 374900, 412390, '2015-02-04', 1, '2015-02-04'),
(108, 'NV0001', 'CTD00007', '2015-01-02', '2015-02-01', 67, 0, 67, 10, 9299.6, 92996, 102296, '2015-02-04', 1, '2015-02-04'),
(109, 'NV0001', 'CTD00008', '2015-01-02', '2015-02-01', 80, 7, 73, 10, 16936, 169360, 186296, '2015-02-04', 1, '2015-02-04'),
(110, 'NV0001', 'CTD00009', '2015-01-02', '2015-02-01', 12, 0, 12, 10, 1743.6, 17436, 19179.6, '2015-02-04', 1, '2015-02-04'),
(111, 'NV0001', 'CTD00010', '2015-01-02', '2015-02-01', 12, 0, 12, 10, 1743.6, 17436, 19179.6, '2015-02-04', 1, '2015-02-04'),
(112, 'NV0001', 'CTD00012', '2015-01-02', '2015-02-01', 18, 0, 18, 10, 2615.4, 26154, 28769.4, '2015-02-04', 1, '2015-02-04'),
(113, 'NV0001', 'CTD00001', '2015-02-02', '2015-03-04', 400, 390, 10, 10, 1484, 14840, 16324, '2015-03-04', 1, '2015-03-04'),
(114, 'NV0001', 'CTD00003', '2015-02-02', '2015-03-04', 256, 156, 100, 10, 21250, 212500, 233750, '2015-03-04', 1, '2015-03-04'),
(115, 'NV0001', 'CTD00004', '2015-02-02', '2015-03-04', 150, 90, 60, 10, 8328, 83280, 91608, '2015-03-04', 1, '2015-03-04'),
(116, 'NV0001', 'CTD00005', '2015-02-02', '2015-03-04', 100, 97, 3, 10, 686.1, 6861, 7547.1, '2015-03-04', 1, '2015-03-04'),
(117, 'NV0001', 'CTD00006', '2015-02-02', '2015-03-04', 279, 235, 44, 10, 7172, 71720, 78892, '2015-03-04', 1, '2015-03-04'),
(118, 'NV0001', 'CTD00007', '2015-02-02', '2015-03-04', 100, 67, 33, 10, 4580.4, 45804, 50384.4, '2015-03-04', 1, '2015-03-04'),
(119, 'NV0001', 'CTD00008', '2015-02-02', '2015-03-04', 134, 80, 54, 10, 12528, 125280, 137808, '2015-03-04', 1, '2015-03-04'),
(120, 'NV0001', 'CTD00009', '2015-02-02', '2015-03-04', 18, 12, 6, 10, 871.8, 8718, 9589.8, '2015-03-04', 1, '2015-03-04'),
(121, 'NV0001', 'CTD00010', '2015-02-02', '2015-03-04', 17, 12, 5, 10, 726.5, 7265, 7991.5, '2015-03-04', 1, '2015-03-04'),
(122, 'NV0001', 'CTD00012', '2015-02-02', '2015-03-04', 58, 18, 40, 10, 5812, 58120, 63932, '2015-03-04', 1, '2015-03-04'),
(123, 'NV0001', 'CTD00001', '2015-03-05', '2015-04-04', 790, 400, 390, 10, 72702, 727020, 799722, '2015-04-05', 1, '2015-04-20'),
(124, 'NV0001', 'CTD00003', '2015-03-05', '2015-04-04', 261, 256, 5, 10, 1062.5, 10625, 11687.5, '2015-04-05', 1, '2015-04-20'),
(125, 'NV0001', 'CTD00004', '2015-03-05', '2015-04-04', 156, 150, 6, 10, 832.8, 8328, 9160.8, '2015-04-05', 1, '2015-04-20'),
(126, 'NV0001', 'CTD00005', '2015-03-05', '2015-04-04', 590, 100, 490, 10, 112063, 1120630, 1232690, '2015-04-05', 1, '2015-04-06'),
(127, 'NV0001', 'CTD00006', '2015-03-05', '2015-04-04', 297, 279, 18, 10, 2934, 29340, 32274, '2015-04-05', 1, '2015-04-20'),
(128, 'NV0001', 'CTD00007', '2015-03-05', '2015-04-04', 179, 100, 79, 10, 10965.2, 109652, 120617, '2015-04-05', 1, '2015-04-06'),
(129, 'NV0001', 'CTD00008', '2015-03-05', '2015-04-04', 178, 134, 44, 10, 10208, 102080, 112288, '2015-04-05', 1, '2015-04-06'),
(130, 'NV0001', 'CTD00009', '2015-03-05', '2015-04-04', 20, 18, 2, 10, 290.6, 2906, 3196.6, '2015-04-05', 1, '2015-04-05'),
(131, 'NV0001', 'CTD00010', '2015-03-05', '2015-04-04', 80, 17, 63, 10, 9153.9, 91539, 100693, '2015-04-05', 1, '2015-04-06'),
(132, 'NV0001', 'CTD00012', '2015-03-05', '2015-04-04', 60, 58, 2, 10, 290.6, 2906, 3196.6, '2015-04-05', 1, '2015-04-06'),
(133, 'NV0001', 'CTD00001', '2015-04-05', '2015-05-05', 1600, 790, 810, 10, 181272, 1812720, 1993990, '2015-05-09', 1, '2015-05-09'),
(134, 'NV0001', 'CTD00003', '2015-04-05', '2015-05-05', 323, 261, 62, 10, 13175, 131750, 144925, '2015-05-09', 1, '2015-05-13'),
(135, 'NV0001', 'CTD00004', '2015-04-05', '2015-05-05', 200, 156, 44, 10, 6107.2, 61072, 67179.2, '2015-05-09', 1, '2015-05-13'),
(136, 'NV0001', 'CTD00005', '2015-04-05', '2015-05-05', 679, 590, 89, 10, 20354.3, 203543, 223897, '2015-05-09', 1, '2015-05-13'),
(137, 'NV0001', 'CTD00006', '2015-04-05', '2015-05-05', 501, 297, 204, 10, 33252, 332520, 365772, '2015-05-09', 1, '2015-05-13'),
(138, 'NV0001', 'CTD00007', '2015-04-05', '2015-05-05', 200, 179, 21, 10, 2914.8, 29148, 32062.8, '2015-05-09', 1, '2015-05-13'),
(139, 'NV0001', 'CTD00008', '2015-04-05', '2015-05-05', 302, 178, 124, 10, 28768, 287680, 316448, '2015-05-09', 1, '2015-05-13'),
(140, 'NV0001', 'CTD00009', '2015-04-05', '2015-05-05', 57, 20, 37, 10, 5376.1, 53761, 59137.1, '2015-05-09', 1, '2015-05-13'),
(141, 'NV0001', 'CTD00010', '2015-04-05', '2015-05-05', 178, 80, 98, 10, 14239.4, 142394, 156633, '2015-05-09', 1, '2015-05-13'),
(142, 'NV0001', 'CTD00012', '2015-04-05', '2015-05-05', 300, 60, 240, 10, 34872, 348720, 383592, '2015-05-09', 1, '2015-05-13'),
(143, 'NV0001', 'CTD00014', '2015-04-05', '2015-05-05', 55, 10, 45, 10, 7335, 73350, 80685, '2015-05-09', 1, '2015-05-13'),
(144, 'NV0001', 'CTD00015', '2015-04-05', '2015-05-05', 67, 13, 54, 25, 16654, 66616, 83270, '2015-05-09', 1, '2015-05-13'),
(145, 'NV0001', 'CTD00016', '2015-04-05', '2015-05-05', 90, 3, 87, 25, 27205.8, 108823, 136029, '2015-05-09', 1, '2015-05-13'),
(146, 'NV0001', 'CTD00017', '2015-04-05', '2015-05-05', 750, 170, 580, 25, 198642, 794570, 993212, '2015-05-09', 1, '2015-06-09');

-- --------------------------------------------------------

--
-- Table structure for table `hoadonchitiet`
--

CREATE TABLE IF NOT EXISTS `hoadonchitiet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mahoadon` int(11) NOT NULL,
  `chisotieuthutheobac` int(11) DEFAULT NULL,
  `dongiatheobac` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_relationship_13` (`mahoadon`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=444 ;

--
-- Dumping data for table `hoadonchitiet`
--

INSERT INTO `hoadonchitiet` (`id`, `mahoadon`, `chisotieuthutheobac`, `dongiatheobac`) VALUES
(225, 105, 90, 1388),
(226, 107, 230, 1630),
(227, 108, 67, 1388),
(228, 111, 12, 1453),
(229, 106, 57, 2287),
(230, 109, 73, 2320),
(231, 104, 151, 2125),
(232, 110, 12, 1453),
(233, 103, 50, 1484),
(234, 103, 50, 1279),
(235, 103, 100, 1394),
(236, 103, 100, 2242),
(237, 103, 90, 2503),
(238, 112, 18, 1453),
(239, 113, 10, 1484),
(240, 122, 40, 1453),
(241, 115, 60, 1388),
(242, 117, 44, 1630),
(243, 118, 33, 1388),
(244, 121, 5, 1453),
(245, 116, 3, 2287),
(246, 119, 54, 2320),
(247, 114, 100, 2125),
(248, 120, 6, 1453),
(252, 130, 2, 1453),
(270, 132, 2, 1453),
(271, 129, 44, 2320),
(274, 131, 63, 1453),
(278, 128, 79, 1388),
(300, 126, 490, 2287),
(324, 127, 18, 1630),
(362, 123, 50, 1484),
(363, 123, 50, 1279),
(364, 123, 100, 1394),
(365, 123, 100, 2242),
(366, 123, 90, 2503),
(370, 124, 5, 2125),
(372, 125, 6, 1388),
(379, 133, 50, 1484),
(380, 133, 50, 1279),
(381, 133, 100, 1394),
(382, 133, 100, 2242),
(383, 133, 100, 2503),
(384, 133, 410, 2587),
(387, 138, 21, 1388),
(413, 142, 240, 1453),
(420, 146, 50, 1230),
(421, 146, 50, 1279),
(422, 146, 480, 1394),
(432, 135, 44, 1388),
(433, 145, 50, 1230),
(434, 145, 37, 1279),
(435, 140, 37, 1453),
(436, 141, 98, 1453),
(437, 137, 204, 1630),
(438, 143, 45, 1630),
(439, 134, 62, 2125),
(440, 136, 89, 2287),
(441, 139, 124, 2320),
(442, 144, 50, 1230),
(443, 144, 4, 1279);

-- --------------------------------------------------------

--
-- Table structure for table `huongdansudung`
--

CREATE TABLE IF NOT EXISTS `huongdansudung` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idnhom` int(11) NOT NULL,
  `ten` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `noidung` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `huongdansudung`
--

INSERT INTO `huongdansudung` (`id`, `idnhom`, `ten`, `noidung`) VALUES
(1, 1, 'Đăng nhập hệ thống', '<p style="text-align:center"><span style="font-size:20px"><span style="color:rgb(0, 0, 205)">Đăng nhập</span></span></p>\n\n<p>Sau khi khách hàng đã đăng ký sử dụng điện, khách hàng được cung cấp tài khoản để truy cập vào hệ thống.</p>\n\n<p style="text-align:justify">Tài khoản bao gồm, tên đăng nhập và mật khẩu. Để đăng nhập vào hệ thống, khách hàng vào trang chủ http://localhost:8080</p>\n\n<p>Chọn <strong>Đăng nhập</strong> theo hình</p>\n\n<p style="text-align:center"><img alt="" src="images/hdsd/khachhang/dangnhap1.PNG" /></p>\n\n<p>Sau đó nhập tên đăng nhập và mật khẩu vào và nhấn <strong>Đăng nhập</strong>.</p>\n\n<p style="text-align:center"><img alt="" src="images/hdsd/khachhang/dangnhap2.png" /></p>\n\n<p>Sau khi đăng nhập thành công, khách hàng có thể chọn chức năng đổi mật khẩu để bảo mật tài khoản của mình.</p>\n\n<p>Chọn <strong>Đổi mật khẩu</strong> theo hình.</p>\n\n<p style="text-align:center"><img alt="" src="images/hdsd/khachhang/doimatkhau1.png" /></p>\n\n<p>Nhập mật khẩu cũ và mật khẩu mới sau đó nhấn <strong>Xác nhận</strong></p>\n\n<p style="text-align:center"><img alt="" src="images/hdsd/khachhang/doimatkhau2.png" /></p>\n\n<p>Thoát khỏi hệ thống</p>\n\n<p>Khách hàng chọn <strong>Thoát </strong>theo hình sau:</p>\n\n<p style="text-align:center"><img alt="" src="images/hdsd/khachhang/thoat.PNG" /></p>\n\n<p style="text-align:center">-----------------------------------------------------------------------------------------------------------</p>\n'),
(2, 1, 'Nhập chỉ số điện năng tiêu thụ', '<p style="text-align:center"><span style="font-size:20px"><span style="color:rgb(0, 0, 205)">Nhập chỉ số điện năng tiêu thụ</span></span></p>\n\n<p>Sau khi khách hàng đã đăng nhập vào hệ thống, ở phần quản lý chức năng, chọn <strong>Nhập chỉ số điện năng tiêu thụ</strong></p>\n\n<p style="text-align:center"><img alt="" src="images/hdsd/khachhang/menuchucnang.PNG" /></p>\n\n<p>Sau đó nhập chỉ số mới nhất trên công tơ điện của khách hàng vào tương ứng với các công tơ điện liệt kê trên trang web và nhấn nút xác nhận.</p>\n\n<p style="text-align:center"><img alt="" src="images/hdsd/khachhang/nhapsolieu1.PNG" /></p>\n\n<p>Hệ thống tự động lưu số liệu lại, tính tiền và xuất hóa đơn. Khách hàng có thể xem hóa đơn trong phần <strong>Xem hóa đơn</strong>.</p>\n\n<p style="text-align:center">-----------------------------------------------------------------------------------------------------------</p>\n'),
(3, 1, 'Thanh toán hóa đơn', 'abc'),
(4, 1, 'Tìm kiếm hóa đơn', 'tkhd'),
(5, 1, 'In hóa đơn', 'inhd'),
(6, 1, 'Gửi ý kiến phản hồi', 'cjdh');

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE IF NOT EXISTS `khachhang` (
  `makhachhang` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `hotenkh` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gioitinh` tinyint(1) DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL,
  `diachi` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sodienthoai` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `matkhau` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `trangthai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`makhachhang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`makhachhang`, `hotenkh`, `gioitinh`, `ngaysinh`, `diachi`, `sodienthoai`, `matkhau`, `trangthai`) VALUES
('KH00001', 'Nguyễn Hải Đăng', 1, '1992-09-24', 'Giai Xuân, Phong Điền, Cần Thơ', '01215941976', 'e99a18c428cb38d5f260853678922e03', 1),
('KH00004', 'Lê Công Thoại', 1, '1992-09-24', 'An Giang', '01215941976', 'e99a18c428cb38d5f260853678922e03', 1),
('KH00005', 'Hồ Hoàng Nha', 1, '1992-09-24', 'An Giang', '01215941976', 'e99a18c428cb38d5f260853678922e03', 1),
('KH00006', 'Phan Hoài nam', 1, '1992-09-24', 'Đồng Tháp', '01215941976', 'e99a18c428cb38d5f260853678922e03', 1),
('KH00007', 'Nguyễn Thái Bảo', 1, '1992-09-24', 'Bạc Liêu', '01215941976', 'e99a18c428cb38d5f260853678922e03', 1),
('KH00008', 'Nguyễn Văn A', 1, '1992-09-24', 'TP HCM', '01215941976', 'e99a18c428cb38d5f260853678922e03', 1),
('KH00009', 'Nguyễn B', 1, '1992-09-24', 'Ninh Kiều', '01215941976', 'e99a18c428cb38d5f260853678922e03', 1),
('KH00010', 'Nguyễn Thị C', 0, '1992-09-24', 'Giai Xuân, Phong Điền, Cần Thơ', '01215941976', 'e99a18c428cb38d5f260853678922e03', 1),
('KH00011', 'Hàng Khem Rinh', 1, '1991-01-01', 'Sóc Trăng', '01234567890', 'c3bf9e4fbbbc17dcb1b9e67406765c1b', 1),
('KH00012', 'Nguyễn Văn D ', 1, '1990-09-03', 'Cần Thơ', '01234567890', 'e99a18c428cb38d5f260853678922e03', 1),
('KH00013', 'Nguyen H', 1, '1993-01-01', 'VL', '12345678900', 'e99a18c428cb38d5f260853678922e03', 1),
('KH00014', 'Lê Thị Diểm Hương', 0, '1993-01-01', 'An Giang', '01662420900', '266136bdea655ee7ed477f7a28c4d7a0', 1),
('KH00015', 'rinh', 1, '1991-01-01', 'st', '11111111111', 'd7837880d0f345506fb7967057cc96ae', 1);

-- --------------------------------------------------------

--
-- Table structure for table `mucdichsudung`
--

CREATE TABLE IF NOT EXISTS `mucdichsudung` (
  `mamucdich` int(11) NOT NULL AUTO_INCREMENT,
  `manhommdsd` int(11) NOT NULL,
  `mucdich` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `thue` int(11) DEFAULT NULL,
  `tinhtheobacthang` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`mamucdich`),
  KEY `fk_relationship_9` (`manhommdsd`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=28 ;

--
-- Dumping data for table `mucdichsudung`
--

INSERT INTO `mucdichsudung` (`mamucdich`, `manhommdsd`, `mucdich`, `thue`, `tinhtheobacthang`) VALUES
(1, 1, 'Điện áp từ 110kV trở lên', 10, 0),
(2, 1, 'Điện áp từ 22kV đến dưới 110kV', 10, 0),
(3, 1, 'Điện áp từ 6kV đến dưới 22kV', 10, 0),
(4, 1, 'Điện áp dưới 6kV', 10, 0),
(5, 2, 'Bệnh viện, nhà trẻ, mẫu giáo, trường phổ thông', 10, 0),
(6, 2, 'Chiếu sáng công cộng; đơn vị hành chính sự nghiệp', 10, 0),
(7, 3, 'Điện áp từ 22kV trở lên', 10, 0),
(8, 3, 'Điện áp từ 6kV đến dưới 22kV', 10, 0),
(9, 3, 'Điện áp dưới 6kV', 10, 0),
(10, 4, 'Sinh hoạt bình thường', 10, 1),
(26, 5, 'Sinh hoạt bình thường', 10, 1),
(27, 3, 'Điện áp từ 110kV trở lên', 10, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nhanvien`
--

CREATE TABLE IF NOT EXISTS `nhanvien` (
  `manhanvien` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `maphongban` int(11) NOT NULL,
  `hoten` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL,
  `gioitinh` tinyint(1) DEFAULT NULL,
  `diachi` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sodienthoai` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `matkhau` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `trangthai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`manhanvien`),
  KEY `fk_relationship_2` (`maphongban`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `nhanvien`
--

INSERT INTO `nhanvien` (`manhanvien`, `maphongban`, `hoten`, `ngaysinh`, `gioitinh`, `diachi`, `sodienthoai`, `email`, `matkhau`, `trangthai`) VALUES
('NV0001', 1, 'Nguyễn Hải Đăng', '1992-09-24', 1, 'Giai Xuân, Phong Điền, Cần Thơ', '01215941976', 'nhd@gmail.com', 'e99a18c428cb38d5f260853678922e03', 1),
('NV0002', 2, 'Nguyễn Văn A', '1993-09-24', 1, 'Vĩnh Long', '01215941976', 'nva@gmail.com', 'e99a18c428cb38d5f260853678922e03', 1),
('NV0003', 2, 'Nguyễn Hoàng Nha', '1993-09-12', 1, 'Bình Minh, Vĩnh Long', '01215941976', 'ntb@gmail.com', '29c1071fc03feff634ff9f98ccb4ec9c', 1),
('NV0004', 1, 'Nguyễn Thái Bảo', '1993-09-12', 1, 'BM, VL', '12345678900', 'nth@gmail.com', '6acdc7486647efcaa715b4ea198f21fd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `nhomhdsd`
--

CREATE TABLE IF NOT EXISTS `nhomhdsd` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tennhom` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nhommucdichsd`
--

CREATE TABLE IF NOT EXISTS `nhommucdichsd` (
  `manhommdsd` int(11) NOT NULL AUTO_INCREMENT,
  `tennhom` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `trangthai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`manhommdsd`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `nhommucdichsd`
--

INSERT INTO `nhommucdichsd` (`manhommdsd`, `tennhom`, `trangthai`) VALUES
(1, 'Nhóm các ngành sản xuất', 0),
(2, 'Nhóm các cơ quan hành chính sự nghiệp', 1),
(3, 'Nhóm kinh doanh', 1),
(4, 'Điện sinh hoạt', 1),
(5, 'Điện nông thôn', 1);

-- --------------------------------------------------------

--
-- Table structure for table `phanmucgia`
--

CREATE TABLE IF NOT EXISTS `phanmucgia` (
  `mabac` int(11) NOT NULL AUTO_INCREMENT,
  `mamucdich` int(11) NOT NULL,
  `bac` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `chisodau` decimal(8,0) DEFAULT NULL,
  `chisocuoi` decimal(8,0) DEFAULT NULL,
  `dongiahientai` decimal(8,0) DEFAULT NULL,
  PRIMARY KEY (`mabac`),
  KEY `fk_relationship_7` (`mamucdich`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=138 ;

--
-- Dumping data for table `phanmucgia`
--

INSERT INTO `phanmucgia` (`mabac`, `mamucdich`, `bac`, `chisodau`, `chisocuoi`, `dongiahientai`) VALUES
(1, 1, '1', '0', '0', '1388'),
(2, 2, '1', '0', '0', '1405'),
(3, 3, '1', '0', '0', '1453'),
(4, 4, '1', '0', '0', '1518'),
(5, 5, '1', '0', '0', '1500'),
(6, 6, '1', '0', '0', '1630'),
(7, 7, '1', '0', '0', '2125'),
(8, 8, '1', '0', '0', '2287'),
(9, 9, '1', '0', '0', '2320'),
(10, 10, '1', '1', '50', '1484'),
(11, 10, '2', '51', '100', '1279'),
(12, 10, '3', '101', '200', '1394'),
(13, 10, '4', '201', '300', '2242'),
(14, 10, '5', '301', '400', '2503'),
(15, 10, '6', '401', '1000', '2587'),
(134, 26, 'Bậc 1', '1', '50', '1230'),
(135, 26, 'Bậc 2', '51', '100', '1279'),
(136, 26, 'Bậc 3', '101', '9000', '1394'),
(137, 27, 'Bậc 1', '0', '0', '1200');

-- --------------------------------------------------------

--
-- Table structure for table `phanquyen`
--

CREATE TABLE IF NOT EXISTS `phanquyen` (
  `maquyen` int(11) NOT NULL,
  `manhanvien` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`maquyen`,`manhanvien`),
  KEY `fk_phanquyen2` (`manhanvien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `phanquyen`
--

INSERT INTO `phanquyen` (`maquyen`, `manhanvien`) VALUES
(1, 'NV0001'),
(2, 'NV0001'),
(3, 'NV0001'),
(3, 'NV0002'),
(3, 'NV0003'),
(1, 'NV0004'),
(3, 'NV0004');

-- --------------------------------------------------------

--
-- Table structure for table `phongban`
--

CREATE TABLE IF NOT EXISTS `phongban` (
  `maphongban` int(11) NOT NULL AUTO_INCREMENT,
  `tenphongban` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ngaythanhlap` date DEFAULT NULL,
  `trangthai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`maphongban`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `phongban`
--

INSERT INTO `phongban` (`maphongban`, `tenphongban`, `ngaythanhlap`, `trangthai`) VALUES
(1, 'Phòng nhân sự', '2015-03-09', 0),
(2, 'Phòng kế toán', '0000-00-00', 1),
(3, 'Phong qc', '2015-03-22', 0);

-- --------------------------------------------------------

--
-- Table structure for table `quyensudung`
--

CREATE TABLE IF NOT EXISTS `quyensudung` (
  `maquyen` int(11) NOT NULL AUTO_INCREMENT,
  `tenquyen` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`maquyen`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `quyensudung`
--

INSERT INTO `quyensudung` (`maquyen`, `tenquyen`) VALUES
(1, 'AllAdmin'),
(2, 'Admin'),
(3, 'User');

-- --------------------------------------------------------

--
-- Table structure for table `tintuc`
--

CREATE TABLE IF NOT EXISTS `tintuc` (
  `matintuc` int(11) NOT NULL AUTO_INCREMENT,
  `manhanvien` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `tieude` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tomtac` text COLLATE utf8_unicode_ci NOT NULL,
  `noidung` text COLLATE utf8_unicode_ci,
  `ngaydang` date DEFAULT NULL,
  `anhtieude` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `trangthai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`matintuc`),
  KEY `fk_relationship_12` (`manhanvien`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

--
-- Dumping data for table `tintuc`
--

INSERT INTO `tintuc` (`matintuc`, `manhanvien`, `tieude`, `tomtac`, `noidung`, `ngaydang`, `anhtieude`, `trangthai`) VALUES
(18, 'NV0001', 'Thanh toán tiền điện trực tuyến tại website cskh.hcmpc.vn', 'Quý khách chọn “Thanh toán trực tuyến”. Sau đó nhập mã khách hàng và nhập thông tin cá nhân. Sau đó bấm chọn ngân hàng có tài khoản thanh toán. (Mã khách hàng quý khách có thể xem trên giấy báo tiền điện hàng tháng).', '<p><strong><u>Bước 1</u>: Quý khách truy cập vào website cskh.hcmpc.vn&nbsp;</strong></p>\r\n\r\n<p>Quý khách chọn “<strong>Thanh toán trực tuyến</strong>”. Sau đó nhập mã khách hàng và nhập thông tin cá nhân. Sau đó bấm chọn ngân hàng có tài khoản thanh toán. (Mã khách hàng quý khách có thể xem trên giấy báo tiền điện hàng tháng).</p>\r\n\r\n<p style="text-align:center"><img alt="" src="http://cskh.hcmpc.com.vn/public/img/images/1.png" style="height:413px; width:678px" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong><u>Bước 2</u>: Lựa chọn phương thức thanh toán:</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>- Quý khách kiểm tra lại <strong>Thông tin thanh toán</strong>. Nếu chính xác thì tiến hành <strong>Thanh toán</strong>.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p style="text-align:center"><img alt="" src="http://cskh.hcmpc.com.vn/public/img/images/2.png" style="height:348px; width:678px" /></p>\r\n\r\n<p style="text-align:center">&nbsp;</p>\r\n\r\n<div style="margin-left: 40px;">• BIDV, Vietinbank, Sacombank: nhập vào thông tin chủ thẻ.</div>\r\n\r\n<div style="margin-left: 40px;">• DongABank, TechcomBank, HDBank, Oceanbank, Vietcombank: nhập vào thông tin tài khoản Internet Banking..</div>\r\n\r\n<div style="margin-left: 40px;">• Oceanbank: Nhập thông tin chủ thẻ hoặc thông tin tài khoản Internet Banking</div>\r\n\r\n<div style="margin-left: 40px;">• VnMart: nhập thông tin tài khoản ví VnMart.</div>\r\n\r\n<div style="margin-left: 40px;">&nbsp;</div>\r\n\r\n<div style="margin-left: 40px; text-align: center;"><img alt="" src="http://cskh.hcmpc.com.vn/public/img/images/3.png" style="height:419px; width:678px" /></div>\r\n\r\n<div style="margin-left: 40px;">&nbsp;</div>\r\n\r\n<div style="text-align: center;">Sau đó nhấn “<strong>Tiếp tục</strong>”.</div>\r\n\r\n<div>&nbsp;</div>\r\n\r\n<div><strong><u>Bước 3</u>: Xác thực thanh toán.</strong></div>\r\n\r\n<div>Quý khách lựa chọn hình thức xác thực, mật khẩu OTP sẽ được trả về theo hình thức quý khách đăng ký (SMS hoặc thiết bị token). Quý khách nhập mật khẩu OTP và nhấn “<strong>Thanh toán</strong>”. Sau khi thanh toán thành công, quý khách sẽ nhận được tin nhắn về điện thoại về thông tin vé của quý khách.</div>\r\n\r\n<div>&nbsp;</div>\r\n\r\n<div style="text-align: center;"><img alt="" src="http://cskh.hcmpc.com.vn/public/img/images/4.png" style="height:536px; width:678px" /></div>\r\n\r\n<div>&nbsp;</div>\r\n\r\n<div>Sau khi thanh toán thành công, quý khách sẽ được chuyển về website với thông báo về kết quả cung cấp dịch vụ</div>\r\n\r\n<div>&nbsp;</div>\r\n\r\n<div><strong><u>Lưu ý:</u> Quý khách vui lòng KHÔNG thực hiện giao dịch thanh toán hóa đơn tiền điện trong khoảng thời gian 17h - 18h30 hàng ngày.</strong></div>\r\n', '2015-04-05', '1422416095_123.jpg', 1),
(19, 'NV0001', 'EMAIL HÓA ĐƠN ĐIỆN TỬ', ' Nhằm nâng cao hiệu quả chăm sóc khách hàng và tạo điều kiện thuận lợi cho khách hàng trong việc xem và nhận HĐĐT, Trung tâm Chăm sóc khách hàng đã triển khai áp dụng hình thức “Tự động gửi Hóa đơn điện tử qua địa chỉ Email của khách hàng” từ tháng 5/2014.', '<p>Nhằm nâng cao hiệu quả chăm sóc khách hàng và tạo điều kiện thuận lợi cho khách hàng trong việc xem và nhận HĐĐT, Trung tâm Chăm sóc khách hàng đã triển khai áp dụng hình thức “Tự động gửi Hóa đơn điện tử qua địa chỉ Email của khách hàng” từ tháng 5/2014. Khách hàng chỉ cần đăng ký một lần duy nhất và sẽ được nhận HĐĐT ngay sau mỗi lần khách hàng thanh toán tiền điện.&nbsp;</p>\r\n\r\n<p>Đến nay, sau hơn nửa năm triển khai, ý tưởng này đã được triển khai tốt trong thực tiễn sản xuất kinh doanh: Đến cuối tháng 12/2014 đã có gần 42 Ngàn khách hàng đăng ký địa chỉ Email nhận HĐĐT tự động và Trung tâm Chăm sóc khách hàng đã thực hiện gửi tự động gần 160 Ngàn Email cho khách hàng. Qua đó cho thấy, tiện ích này được đông đảo khách hàng sử dụng điện quan tâm sử dụng.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><u><strong>Cách thức đăng ký:</strong></u></p>\r\n\r\n<p style="text-align:center"><img alt="" src="http://cskh.hcmpc.com.vn/public/img/images/1%281%29.png" style="height:380px; width:678px" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><u><strong>Bước 2:</strong></u> Chọn mục “Hóa đơn điện tử” thì sẽ xuất hiện bảng thông báo tự động Pop up hướng dẫn khách hàng đăng ký bằng cách nhập mã khách hàng và địa chỉ Email nhận HĐĐT.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p style="text-align:center"><img alt="" src="http://cskh.hcmpc.com.vn/public/img/images/2%281%29.png" style="height:423px; width:678px" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Với các thao tác đơn giản, khách hàng có thể dễ dàng đăng ký nhận HĐĐT tự động sau khi đã thanh toán tiền điện, tăng thêm tiện ích, thuận tiện hơn cho khách hàng trong việc nhận HĐĐT để quyết toán thuế.</p>\r\n\r\n<p>Góp phần nâng cao chất lượng dịch vụ chăm sóc khách hàng của Tổng &nbsp;công ty Điện lực TP.HCM.</p>\r\n', '2015-04-05', '1422419512_logo_invoice.jpg', 1);
INSERT INTO `tintuc` (`matintuc`, `manhanvien`, `tieude`, `tomtac`, `noidung`, `ngaydang`, `anhtieude`, `trangthai`) VALUES
(20, 'NV0001', 'Thông báo Giá bán điện áp dụng từ ngày 16/3/2015', 'Tổng Công ty Điện lực TP.HCM trân trọng thông báo đến Quý khách hàng sử dụng điện trên địa bàn TP.HCM: Kể từ ngày 16/3/2015, biểu giá bán điện được áp dụng để tính toán tiền sử dụng điện của Quý khách hàng', '<p style="text-align:justify">Căn cứ Quyết định số 28/2014/QĐ-TTg ngày 07/4/2014 của Thủ tướng Chính phủ quy định về cơ cấu biểu giá bán lẻ điện có hiệu lực kể từ ngày 01/6/2014;</p>\r\n\r\n<p style="text-align:justify">Căn cứ Thông tư số 16/2014/TT-BCT ngày 29/05/2014 của Bộ Công Thương về việc quy định về thực hiện giá bán điện có hiệu lực kể từ ngày 01/6/2014;</p>\r\n\r\n<p style="text-align:justify">Căn cứ Quyết định số 2256/QĐ-BCT ngày 12/3/2015 của Bộ Công Thương về việc quy định về giá bán điện;</p>\r\n\r\n<p style="text-align:justify">Tổng Công ty Điện lực TP.HCM trân trọng thông báo đến Quý khách hàng sử dụng điện trên địa bàn TP.HCM: <strong>Kể từ ngày 16/3/2015</strong>, biểu giá bán điện được áp dụng để tính toán tiền sử dụng điện của Quý khách hàng như sau:</p>\r\n\r\n<table border="1" cellpadding="0" cellspacing="0" style="height:5454px; width:774px">\r\n	<tbody>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong>STT</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p style="text-align:center"><span style="font-size:14px"><strong>ĐỐI TƯỢNG ÁP DỤNG GIÁ</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>GIÁ BÁN ĐIỆN CHƯA CÓ VAT (Đồng/kWh)</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong>1</strong></span></p>\r\n			</td>\r\n			<td colspan="2" style="height:38px; width:576px">\r\n			<p><span style="font-size:14px"><strong>Giá bán lẻ điện cho các ngành sản xuất:</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>1.1</em></span></p>\r\n			</td>\r\n			<td colspan="2" style="height:38px; width:576px">\r\n			<p><span style="font-size:14px"><em>Cấp điện áp từ 110 kV trở lên</em></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; a) Giờ bình thường</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.388</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; b) Giờ thấp điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">869</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; c) Giờ cao điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.459</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>1.2</em></span></p>\r\n			</td>\r\n			<td colspan="2" style="height:38px; width:576px">\r\n			<p><span style="font-size:14px"><em>Cấp điện áp từ 22 kV đến dưới 110 kV</em></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; a) Giờ bình thường</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.405</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; b) Giờ thấp điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">902</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; c) Giờ cao điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.556</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>1.3</em></span></p>\r\n			</td>\r\n			<td colspan="2" style="height:38px; width:576px">\r\n			<p><span style="font-size:14px"><em>Cấp điện áp từ 6 kV đến dưới 22 kV</em></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; a) Giờ bình thường</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.453</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; b) Giờ thấp điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">934</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; c) Giờ cao điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.637</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong><em>1.4</em></strong></span></p>\r\n			</td>\r\n			<td colspan="2" style="height:38px; width:576px">\r\n			<p><span style="font-size:14px"><strong><em>Cấp điện áp dưới 6 kV</em></strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>&nbsp;&nbsp; a) Giờ bình thường</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>1.518</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>&nbsp;&nbsp; b) Giờ thấp điểm</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>983</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>&nbsp;&nbsp; c) Giờ cao điểm</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>2.735</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong>2</strong></span></p>\r\n			</td>\r\n			<td colspan="2" style="height:38px; width:576px">\r\n			<p><span style="font-size:14px"><strong>Giá bán lẻ điện cho khối hành chính sự nghiệp:</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>2.1</em></span></p>\r\n			</td>\r\n			<td colspan="2" style="height:38px; width:576px">\r\n			<p><span style="font-size:14px"><em>Bệnh viện, nhà trẻ, mẫu giáo, trường phổ thông:</em></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">Cấp điện áp từ 6 kV trở lên</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.460</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">Cấp điện áp dưới 6 kV</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.557</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong><em>2.2</em></strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong><em>Chiếu sáng công cộng, đơn vị hành chính sự nghiệp:</em></strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>Cấp điện áp từ 6 kV trở lên</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>1.606</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>Cấp điện áp dưới 6 kV</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>1.671</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong>3</strong></span></p>\r\n			</td>\r\n			<td colspan="2" style="height:38px; width:576px">\r\n			<p><span style="font-size:14px"><strong>Giá bán lẻ điện cho kinh doanh:</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>3.1</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Cấp điện áp từ 22 kV trở lên</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; a) Giờ bình thường</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.125</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; b) Giờ thấp điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.185</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; c) Giờ cao điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">3.699</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>3.2</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Cấp điện áp từ 6 kV đến dưới 22 kV</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; a) Giờ bình thường</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.287</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; b) Giờ thấp điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.347</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; c) Giờ cao điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">3.829</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong><em>3.3</em></strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong><em>Cấp điện áp dưới 6 kV</em></strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>&nbsp;&nbsp; a) Giờ bình thường</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>2.320</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>&nbsp;&nbsp; b) Giờ thấp điểm</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>1.412</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>&nbsp;&nbsp; c) Giờ cao điểm</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>3.991</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong>4</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>Giá bán lẻ điện cho sinh hoạt</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong><em>4.1</em></strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong><em>Giá bán lẻ điện sinh hoạt</em></strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>&nbsp;&nbsp;&nbsp; Bậc 1: Cho kWh từ 0 - 50 </strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>1.484</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>&nbsp;&nbsp;&nbsp; Bậc 2: Cho kWh từ 51 - 100 </strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>1.533</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>&nbsp;&nbsp;&nbsp; Bậc 3: Cho kWh từ 101 - 200 </strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>1.786</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>&nbsp;&nbsp;&nbsp; Bậc 4: Cho kWh từ 201 – 300</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>2.242</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>&nbsp;&nbsp;&nbsp; Bậc 5: Cho kWh từ 301 – 400</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>2.503</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>&nbsp;&nbsp;&nbsp; Bậc 6: Cho kWh từ 401 trở lên</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px"><strong>2.587</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>4.2</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Giá bán lẻ điện sinh hoạt dùng điện kế thẻ trả trước</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.141</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong>5</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>Giá bán buôn điện nông thôn</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>5.1</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Giá bán buôn điện sinh hoạt</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp;&nbsp; Bậc 1: Cho kWh từ 0 - 50</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.230</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp;&nbsp; Bậc 2: Cho kWh từ 51 - 100</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.279</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp;&nbsp; Bậc 3: Cho kWh từ 101 - 200</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.394</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp;&nbsp; Bậc 4: Cho kWh từ 201 – 300</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.720</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp;&nbsp; Bậc 5: Cho kWh từ 301 – 400</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.945</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp;&nbsp; Bậc 6: Cho kWh từ 401 trở lên</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.028</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>5.2</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Giá bán buôn điện cho mục đích khác</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.322</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong>6</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>Giá bán buôn điện khu tập thể, cụm dân cư</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>6.1</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Thành phố, thị xã</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px">6.1.1</span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">Giá bán buôn điện sinh hoạt</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px">6.1.1.1</span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">Trạm biến áp do bên bán điện đầu tư</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp;&nbsp; Bậc 1: Cho kWh từ 0 - 50</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.382</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp;&nbsp; Bậc 2: Cho kWh từ 51 - 100</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.431</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp;&nbsp; Bậc 3: Cho kWh từ 101 - 200</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.624</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp;&nbsp; Bậc 4: Cho kWh từ 201 – 300</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.049</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp;&nbsp; Bậc 5: Cho kWh từ 301 – 400</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.310</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp;&nbsp; Bậc 6: Cho kWh từ 401 trở lên</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.389</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>6.1.1.2</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Trạm biến áp do Bên mua điện đầu tư</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">Bậc 1: Cho kWh từ 0 đến 50</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.361</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">Bậc 2: Cho kWh từ 51 đến 100</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.410</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">Bậc 3: Cho kWh từ 101 đến 200</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.575</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">Bậc 4: Cho kWh từ 201 đến 300</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.984</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">Bậc 5: Cho kWh từ 301 đến 400</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.229</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">Bậc 6: Cho kWh từ 401 trở lên</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.333</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>6.1.2</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Giá bán buôn điện cho mục đích khác</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.333</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>6,2</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>Thị trấn, huyện lỵ</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>6.2.1</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>Giá bán buôn điện sinh hoạt</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>6.2.1.1</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Trạm biến áp do Bên bán điện đầu tư</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 1: Cho kWh từ 0 đến 50</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.332</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 2: Cho kWh từ 51 đến 100</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.381</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 3: Cho kWh từ 101 đến 200</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.539</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 4: Cho kWh từ 201 đến 300</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.941</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 5: Cho kWh từ 301 đến 400</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.181</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 6: Cho kWh từ 401 trở lên</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.256</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>6.2.1.2</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Trạm biến áp do Bên mua điện đầu tư</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 1: Cho kWh từ 0 đến 50</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.311</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 2: Cho kWh từ 51 đến 100</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.360</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 3: Cho kWh từ 101 đến 200</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.503</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 4: Cho kWh từ 201 đến 300</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.856</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 5: Cho kWh từ 301 đến 400</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.101</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 6: Cho kWh từ 401 trở lên</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.174</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>6.2.2</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Giá bán buôn điện cho mục đích khác</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.333</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong>7</strong></span></p>\r\n			</td>\r\n			<td colspan="2" style="height:38px; width:576px">\r\n			<p><span style="font-size:14px"><strong>Giá bán buôn điện cho tổ hợp thương mại - dịch vụ - sinh hoạt</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>7,1</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Giá bán buôn điện sinh hoạt</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 1: Cho kWh từ 0 đến 50</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.454</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 2: Cho kWh từ 51 đến 100</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.502</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 3: Cho kWh từ 101 đến 200</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.750</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 4: Cho kWh từ 201 đến 300</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.197</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 5: Cho kWh từ 301 đến 400</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.453</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp; Bậc 6: Cho kWh từ 401 trở lên</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.535</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>7,2</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Giá bán buôn điện cho mục đích khác</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; a) Giờ bình thường</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.192</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; b) Giờ thấp điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.334</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; c) Giờ cao điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">3.771</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><strong>8</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><strong>Giá bán buôn điện cho các khu công nghiệp</strong></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>8,1</em></span></p>\r\n			</td>\r\n			<td colspan="2" style="height:38px; width:576px">\r\n			<p><span style="font-size:14px"><strong>Giá bán buôn điện tại thanh cái 110kV của trạm biến áp 110kV/35-22-15-6kV</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>8.1.1</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Tổng công suất đặt các MBA của trạm biến áp lớn hơn 100MVA</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; a) Giờ bình thường</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.325</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; b) Giờ thấp điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">846</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; c) Giờ cao điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.407</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>8.1.2</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Tổng công suất đặt các MBA của trạm biến áp từ 50MVA đến 100 MVA</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; a) Giờ bình thường</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.330</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; b) Giờ thấp điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">820</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; c) Giờ cao điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.395</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>8.1.3</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Tổng công suất đặt các MBA của trạm biến áp dưới 50 MVA</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; a) Giờ bình thường</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.324</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; b) Giờ thấp điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">818</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; c) Giờ cao điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.379</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>8,2</em></span></p>\r\n			</td>\r\n			<td colspan="2" style="height:38px; width:576px">\r\n			<p><span style="font-size:14px"><strong>Giá bán buôn điện phía trung áp của trạm biến áp 110kV/35-22-15-6kV</strong></span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>8.2.1</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Cấp điện áp từ 22kV đến dưới 110kV</em>&nbsp;&nbsp;</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; a) Giờ bình thường</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.378</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; b) Giờ thấp điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">885</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; c) Giờ cao điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.506</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p><span style="font-size:14px"><em>8.2.2</em></span></p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px"><em>Cấp điện áp từ 6kV đến dưới 22kV</em>&nbsp;&nbsp;</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; a) Giờ bình thường</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">1.425</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; b) Giờ thấp điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">916</span></p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="height:38px; width:66px">\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td style="height:38px; width:469px">\r\n			<p><span style="font-size:14px">&nbsp;&nbsp; c) Giờ cao điểm</span></p>\r\n			</td>\r\n			<td style="height:38px; width:107px">\r\n			<p><span style="font-size:14px">2.586</span></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p><strong><u>Lưu ý</u></strong>:</p>\r\n\r\n<p style="margin-left:17.3pt">Ø Giá bán được quy định theo thời gian sử dụng trong ngày như sau:</p>\r\n\r\n<p style="margin-left:1.0cm"><strong>1.&nbsp;&nbsp;&nbsp;&nbsp; </strong><strong>Giờ bình thường:</strong></p>\r\n\r\n<p style="margin-left:44.25pt">a.&nbsp;&nbsp; Gồm các ngày từthứ Hai đến thứ Bảy:</p>\r\n\r\n<p style="margin-left:51.3pt">-&nbsp; Từ 04 giờ 00 đến 9 giờ 30 (05 giờ và 30 phút);</p>\r\n\r\n<p style="margin-left:51.3pt">-&nbsp; Từ 11 giờ 30 đến 17 giờ 00 (05 giờ và 30 phút);</p>\r\n\r\n<p style="margin-left:51.3pt">-&nbsp; Từ 20 giờ 00 đến 22 giờ 00 (02 giờ).</p>\r\n\r\n<p style="margin-left:44.25pt">b. Ngày Chủ nhật:</p>\r\n\r\n<p style="margin-left:51.3pt">- Từ 04 giờ 00 đến 22 giờ 00 (18 giờ).</p>\r\n\r\n<p style="margin-left:1.0cm"><strong>2.&nbsp;&nbsp;&nbsp;&nbsp; </strong><strong>Giờ cao điểm:</strong></p>\r\n\r\n<p style="margin-left:44.25pt">a.&nbsp; Gồm các ngày từ thứ Hai đến thứ Bảy:</p>\r\n\r\n<p style="margin-left:51.3pt">- Từ 09 giờ 30 đến 11 giờ 30 (02 giờ);</p>\r\n\r\n<p style="margin-left:51.3pt">- Từ 17 giờ 00 đến 20 giờ 00 (03 giờ).</p>\r\n\r\n<p style="margin-left:44.25pt">b. Ngày Chủ nhật: không có giờ cao điểm.</p>\r\n\r\n<p style="margin-left:1.0cm"><strong>3.&nbsp;&nbsp;&nbsp;&nbsp; </strong><strong>Giờ thấp điểm:</strong></p>\r\n\r\n<p style="margin-left:51.3pt">- Tất cả các ngày trong tuần: từ 22 giờ 00 đến 04 giờ 00 sáng ngày hôm sau (06 giờ).</p>\r\n\r\n<p style="margin-left:15.9pt">Ø Trường hợp có thay đổi mục đích sử dụng điện làm thay đổi giá áp dụng, đề nghị Quý khách hàng thông báo cho ngành Điện trước 15 ngày để điều chỉnh việc áp giá trong hợp đồng theo đúng mục đích sử dụng.</p>\r\n\r\n<p style="margin-left:15.9pt">Ø Khi có thay đổi chủ hộ sử dụng điện, đề nghị Quý khách hàng liên hệ với Công ty Điện lực khu vực để lập thủ tục ký lại hợp đồng mua bán điện.</p>\r\n\r\n<p style="margin-left:15.9pt">Ø<strong> Đối với sinh viên và người lao động thuê nhà để ở</strong>: cứ 04 người đăng ký được hưởng định mức 01 hộ (01 người được tính là ¼ định mức) giá bán lẻ điện sinh hoạt.</p>\r\n\r\n<p><strong>Để biết thêm thông tin vui lòng liên hệ tổng đài chăm sóc khách hàng 1900545454 của Tổng công ty Điện lực TP.HCM hoặc truy cập website </strong><span style="color:rgb(0, 0, 255)"><u>cskh.hcmpc.vn</u></span>,<a href="http://www.hcmpc.vn/"> www.hcmpc.vn</a><strong>&nbsp; hoặc email </strong><a href="mailto:cskh@hcmpc.com.vn">cskh@hcmpc.com.vn</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p style="text-align:right"><strong>TỔNG CÔNG TY ĐIỆN LỰC TP. HỒ CHÍ MINH </strong></p>\r\n\r\n<p style="text-align:right"><strong>TRÂN TRỌNG THÔNG BÁO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong></p>\r\n', '2015-04-05', '1426212082_logo-icon.png', 1);
INSERT INTO `tintuc` (`matintuc`, `manhanvien`, `tieude`, `tomtac`, `noidung`, `ngaydang`, `anhtieude`, `trangthai`) VALUES
(21, 'NV0001', 'EVNHCMC: Mở rộng tiếp nhận yêu cầu dịch vụ về điện tại các Công ty điện lực', 'Từ ngày 01/10/2014, Tổng công ty Điện lực Tp.HCM mở rộng việc tiếp nhận yêu cầu dịch vụ về điện của khách hàng tại các quầy giao dịch của các Công ty điện lực, không phân biệt khu vực quản lý của các Công ty điện lực.', '<p>Với chủ trương không ngừng nâng cao chất lượng phục vụ khách hàng, do đó, khi khách hàng có nhu cầu cấp điện và các dịch vụ khác liên quan về điện trên địa bàn TP.HCM khách hàng có thể đến bất kỳ phòng giao dịch nào của công ty điện lực trên địa bàn TP.HCM để thực hiện đăng ký. Sau đó, các Công ty điện lực sẽ chuyển các nội dung yêu cầu của khách hàng về Công ty điện lực khu vực phụ trách giải quyết nhu cầu dịch vụ của khách hàng.<br />\r\nĐể biết thông tin chi tiết, Quý khách hàng vui lòng liên hệ 1900.54.54.54 - Tổng đài Trung tâm chăm sóc khách hàng của Tổng công ty Điện lực TP. Hồ Chí Minh, website chăm sóc khách hàng: cskh.hcmpc.com.vn hoặc email cskh@hcmpc.com.vn.<br />\r\n<strong>Trang Nhung</strong></p>\r\n', '2015-04-05', 'gdkhsudungdien.jpg', 1),
(22, 'NV0001', 'Công ty Điện lực Bình Dương khởi động Tổng đài chăm sóc khách hàng', 'Từ ngày 25/11/2013, khách hàng sử dụng điện trên địa bàn tỉnh Bình Dương có cơ hội được trả lời trực tiếp tất cả các thắc mắc về điện thông qua Tổng đài Chăm sóc khách hàng 19001102.', '<p style="text-align:justify">Lễ ký&nbsp;hợp đồng thuê Tổng đài chăm sóc khách hàng vừa diễn ra tại thành phố Hồ Chí Minh, giữa Tổng công ty Điện lực thành phố Hồ Chí Minh (EVN HCMC) và Công ty Điện lực Bình Dương. Theo đó, Trung tâm Chăm sóc khách hàng (TTCSKH) thuộc EVN HCMC sẽ có trách nhiệm hỗ trợ dịch vụ chăm sóc khách hàng cho Công ty Điện lực Bình Dương (PC Bình Dương) thông qua số <strong>19001102.</strong></p>\r\n\r\n<table align="right" border="0" cellpadding="10" cellspacing="1" style="height:247px; width:331px">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p><img alt="" src="http://cms.evn.com.vn/Portals/0/userfiles/vinhlonghh/tong%20dai%20binh%20%20duong%202_1.jpg" style="border-style:solid; border-width:0px; height:221px; margin:0px; width:300px" /></p>\r\n\r\n			<p style="text-align:center"><span style="font-size:11px"><em>Trung tâm CSKH của EVN HCMC hỗ trợ dịch vụ cho PC Bình Dương&nbsp; từ tháng 11/2013 - Ảnh:&nbsp; Vĩnh Long</em></span></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p style="text-align:justify">Đây là nỗ lực của Công ty Điện lực Bình Dương (PC Bình Dương) nhằm đáp ứng tốt nhất, nhanh nhất mọi thắc mắc liên quan đến dịch vụ của ngành Điện cho khách hàng. Theo lãnh đạo PC Bình Dương, công tác chuẩn bị hạ tầng kỹ thuật, nhân sự… đã được Công ty và Trung tâm CSKH của EVN HCMC phối hợp thực hiện rất kỹ<span style="font-size:12px">, đảm bảo vận hành song song tổng đài trực tuyến, tin nhắn SMS, email… nhằm đa dạng hóa các kênh chăm sóc khách hàng, tạo thuận tiện nhất cho người dùng điện.</span></p>\r\n\r\n<p style="text-align:justify">Tổng đài 19001102 sẽ được vận hành liên tục 24/7, với đội ngũ nhân viên của Trung tâm CSKH của EVN HCMC đã có kinh nghiệm, kỹ năng và tính chuyên nghiệp cao, đáp ứng đồng thời nhiều cuộc gọi đến của khách hàng.</p>\r\n\r\n<p style="text-align:justify">Ngay trong ngày đầu tiên &nbsp;đi vào hoạt động, rất nhiều khách hàng sử dụng điện ở Bình Dương đã gọi tới Tổng đài, qua đó được các nhân viên trả lời nhiệt tình, thỏa đáng – ông Ngô Anh Việt&nbsp; - Giám đốc TTCSKH EVN HCMC, cho biết. Việc hỗ trợ PC Bình Dương cũng là một trong những hướng đi nhằm mở rộng hoạt động của Trung tâm Chăm sóc khách hàng của EVN HCMC, tiến tới trở thành 1 tổng đài dùng chung cho thành phố Hồ Chí Minh và các tỉnh lân cận.</p>\r\n\r\n<p style="text-align:justify">Hiện công ty Điện lực Bình Dương đang triển khai các hoạt động nhằm quảng bá đầu số <strong>19001102</strong> đến tất cả người dùng điện trên địa bàn, đảm bảo đến tháng 1/2014, mọi khách hàng đều biết và sử dụng dịch vụ của Tổng đài.</p>\r\n\r\n<table align="left" border="1" cellpadding="10" cellspacing="1" style="width:500px">\r\n	<tbody>\r\n		<tr>\r\n			<td style="background-color:rgb(204, 204, 204)">\r\n			<p><strong>Khách hàng dùng điện trên địa bàn tỉnh Bình Dương có thể gọi số 19001102 về các vấn đề:</strong></p>\r\n\r\n			<p><strong>- Giá điện, các dịch vụ về điện nói chung</strong></p>\r\n\r\n			<p><strong>- Báo thay đổi chủ hộ</strong></p>\r\n\r\n			<p><strong>- Báo mất điện, sự cố về điện </strong></p>\r\n\r\n			<p><strong>- Gia hạn,thanh lý hợp đồng, </strong></p>\r\n\r\n			<p><strong>- Tra cứu thông tin thanh toán tiền điện...</strong></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n', '2015-04-05', 'tong dai binh  duong 2_1.jpg', 1),
(23, 'NV0001', 'Khắc phục sự cố Nhà máy Thủy điện An Khê - KaNak', 'Nhà máy Thủy điện An Khê đã bị thiệt hại nặng nề trong cơn lũ lịch sử giữa tháng 11 vừa qua. Đến chiều 25/11/2013, công tác khắc phục sự cố tại Nhà máy vẫn đang được triển khai với sự huy động tối đa nhân lực và thiết bị của Công ty Thủy điện An Khê – KaNak.', '<div class="baiviet">\r\n<p style="text-align:justify">Lúc 19h ngày 15/11/2013, mưa lớn kéo dài, lũ dâng cao kèm theo lũ quét ập về bất ngờ làm ngập Nhà máy Thủy điện An Khê - KaNak. Nhà máy phải dừng vận hành để bảo toàn thiết bị. Ngay sau khi sự cố xảy ra, đoàn công tác của EVN do Phó tổng giám đốc Đặng Hoàng An đã có mặt tại Thủy điện An Khê – Ka Nak để kiểm tra và chỉ đạo công tác khắc phục sự cố nói trên. Đến nay, sau 10 ngày của sự cố mặc dù nước lũ đã rút, nhưng do khối lượng rất lớn cát, đá dồn về khu vực nhà máy nên công tác khôi phục đang hết sức khó khăn.&nbsp;</p>\r\n\r\n<p style="text-align:justify">Theo báo cáo của Công ty Thủy điện An Khê – KaNak: Do ảnh hưởng áp thấp nhiệt đới, trong tối 14/11 và ngày 15/11 tại khu vực thị xã An Khê (Gia Lai) và khu vực đèo An Khê, xã Tây Thuận (huyện Tây Sơn) có mưa rất to, làm cho nước tại các suối về hồ dâng rất cao gây sạt lở nhiều nơi, đặc biệt là khu vực đèo An Khê.</p>\r\n\r\n<p style="text-align:justify">Mưa lớn dồn dập đổ về, kéo hàng ngàn tấn đất đá, cát vùi lấp nhà máy, đường vận hành và thượng lưu nhà máy bị dòng lũ dữ phá vỡ. Tại phía thượng lưu nhà máy (khu vực máy biến áp chính), đất đá và cát lấp đầy với khoảng 20.000m<sup>3</sup>.</p>\r\n\r\n<table align="right" border="1" cellpadding="3" cellspacing="3" style="height:158px; width:281px">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p style="text-align:justify"><span style="color:#008080">Nhà máy Thủy điện An Khê – KaNak: Thuộc Tổng công ty Phát điện 2 (EVN Genco 2) đóng tại xã Tây Thuận - huyện Tây Sơn - tỉnh Bình Định, gồm 2 nhà máy. </span></p>\r\n\r\n			<p style="text-align:justify"><span style="color:#008080">Nhà máy Thủy điện An Khê: 2 tổ máy, công suất mỗi tổ máy 80MW;</span></p>\r\n\r\n			<p style="text-align:justify"><span style="color:#008080">Nhà máy Thủy điện Ka Nak: 2 tổ máy, công suất mỗi tổ máy 6,5MW.</span></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p style="text-align:justify">Phía hạ lưu do sạt lở đất cát tại bậc tiêu năng của mương thoát nước bờ trái xuống lòng kênh xả gây cản trở dòng chảy từ nhà máy. Kênh dẫn nước vào nhà máy bị sạt lở bờ khoảng 100m, bồi lấp khoảng hơn 15.000m<sup>3</sup> đất đá. Kênh xả cũng bị sạt lở, bồi lấp khoảng hơn 30.000m<sup>3</sup> đất đá, cát.</p>\r\n\r\n<p style="text-align:justify">Đường thi công vận hành từ nhà máy cũng bị sạt lở nhiều chỗ, có chỗ bị sạt sâu đến hơn 150m về phía taluy âm, chiều dài bị sạt lở hơn 1km làm chia cắt đường không đi được.</p>\r\n\r\n<p style="text-align:justify">Hệ thống thoát nước bờ phải bị phá vỡ hoàn toàn; hệ thống thoát nước bờ trái bị bồi cát và vỡ bậc tiêu năng.</p>\r\n\r\n<p style="text-align:justify">Riêng trạm điện 220 kV bị vỡ tường phía thượng lưu và bồi lấp đất cát, mương thoát nước phía trước trạm bị bồi lấp trên gần 2m.</p>\r\n\r\n<p style="text-align:justify">Hiện tại cầu Soi Lốp trên đường vào nhà máy đang bị lở một mố cầu, cầu tràn Suối Cát bị vỡ tường dẫn và bị nước cuốn trôi một nhịp rất khó khăn cho công tác vận chuyển thiết bị để khôi phục sự cố của nhà máy.</p>\r\n\r\n<p style="text-align:justify">Tính đến chiều 25/11, công tác khắc phục sự cố Nhà máy Thủy điện An Khê bị đất đá, cát vùi lấp sau cơn lũ ống lịch sử vẫn đang được Công ty khẩn trương tiến hành với sự trợ giúp của 500 công nhân được tăng cường từ các đơn vị của Tổng công ty Phát điện 2 cùng nhiều&nbsp;phương cơ giới để khẩn trương khắc phục sự cố.</p>\r\n\r\n<p style="text-align:justify">Dưới đây là một số hình ảnh thiệt hại do cơn lũ gây ra đối với nhà máy thủy điện An Khê do CTV và đơn vị cung cấp:</p>\r\n\r\n<table align="center" cellpadding="1" cellspacing="1" style="width:500px">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p><img alt="" src="http://cms.evn.com.vn/Portals/0/userfiles/luongtcdl/2013/11/24-11-Anh-3-Thuy-dien-bi-vui-l-7534-7123-1385286356.jpg" style="height:415px; width:540px" /></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p style="text-align:center"><span style="font-size:12px">Thủy điện An Khê đang bị số lượng cát đ</span>á<span style="font-size:12px"> vùi lấp nhiều vị trí sau cơn lũ lịch sử ngày 15/11/2013</span></p>\r\n\r\n<table align="center" cellpadding="1" cellspacing="1" style="width:500px">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt="" src="http://cms.evn.com.vn/Portals/0/userfiles/luongtcdl/2013/11/1-%283%29-ba9aa.JPG" style="height:405px; width:540px" /></td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p style="text-align:center">Khu vực trạm biến áp 220 kV vẫn đang bị đất cát vùi lấp đến gần 2m</p>\r\n\r\n<table align="center" cellpadding="1" cellspacing="1" style="width:500px">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt="" src="http://cms.evn.com.vn/Portals/0/userfiles/luongtcdl/2013/11/24-11-Anh-7-Thuy-dien-bi-vui-l-4368-7975-1385286356.jpg" style="height:415px; width:540px" /></td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p style="text-align:center">Khu vực bên trong nhà máy nơi vị trí hầm cáp vẫn đang còn đọng nước</p>\r\n\r\n<table align="center" cellpadding="1" cellspacing="1" style="width:500px">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt="" src="http://cms.evn.com.vn/Portals/0/userfiles/luongtcdl/2013/11/lu-vui-2-1024x768.jpg.ashx.jpg" style="height:405px; width:540px" /></td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p style="text-align:center">Kênh dẫn nước vào nhà máy bị sạt lở bờ khoảng 100m, bồi lấp khoảng hơn 15.000m<sup>3</sup> đất đá.</p>\r\n\r\n<table align="center" cellpadding="1" cellspacing="1" style="width:500px">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt="" src="http://cms.evn.com.vn/Portals/0/userfiles/luongtcdl/2013/11/24-11-Anh-8-Thuy-dien-bi-vui-l-2815-8786-1385286356.jpg" style="height:415px; width:540px" /></td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p style="text-align:center">Công ty Thủy điện An Khê - Ka Nak đang huy động tối đa lực lượng và thiết bị để khôi phục sự cố do thiên tai bão lũ gây ra</p>\r\n\r\n<table align="center" cellpadding="1" cellspacing="1" style="width:500px">\r\n	<tbody>\r\n		<tr>\r\n			<td><img alt="" src="http://cms.evn.com.vn/Portals/0/userfiles/luongtcdl/2013/11/24-11-Anh-5-Thuy-dien-bi-vui-l-1200-5581-1385286356.jpg" style="height:415px; width:540px" /></td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>Hiện tại cầu Soi Lốp trên đường vào nhà máy đang bị lở một mố cầu, gây ra nhiều khó khăn cho công tác vận chuyển thiết bị để khôi phục sự cố của Nhà máy.</p>\r\n</div>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Lương Nguyên</p>\r\n', '2015-04-05', '24-11-Anh-7-Thuy-dien-bi-vui-l-4368-7975-1385286356.jpg', 1),
(24, 'NV0001', 'LienVietPostBank thu hộ tiền điện tại miền Nam', 'Ngày 18/11, Ngân hàng Thương mại cổ phần  Bưu điện Liên Việt (LienVietPostBank) và Tổng công ty Điện lực miền Nam (EVN SPC) đã  ký hợp đồng thu hộ tiền điện.', '<p style="text-align:justify">Theo đó, LienVietPostBank và EVN SPC cam kết phối hợp triển khai và mở rộng dịch vụ thu hộ tiền điện đối với các các khách hàng là doanh nghiệp và cá nhân sử dụng điện của Tổng công ty &nbsp; qua 3 kênh chính: Tại quầy giao dịch ngân hàng, các bưu cục và điểm Bưu điện&nbsp; - Văn hóa xã; ngân hàng điện tử của LienVietPostBank (Internet Banking, Mobile Banking, ATM…) và &nbsp;thu tại nhà thông qua đội ngũ cộng tác viên.</p>\r\n\r\n<p style="text-align:justify">Với việc khai thác qua 3 kênh kể trên, bên cạnh việc tận dụng lợi thế của ngân hàng có mạng lưới hoạt động lớn nhất trên cả nước (hơn 70 điểm giao dịch và hơn 10.000 bưu cục và điểm Bưu điện - Văn hóa xã của Vietnam Post), LienVietPostBank kỳ vọng sẽ mở rộng được phạm vi và phương thức thanh toán hóa đơn tiền điện đến với đông đảo người dân, mang đến cho khách hàng dịch vụ “tại nhà”.</p>\r\n\r\n<p style="text-align:justify">Hiện tại, LienVietPostBank đang triển khai việc mở tài khoản cá nhân và phát hành thẻ ATM cho khách hàng trên hệ thống bưu cục rộng khắp đến cấp xã, tạo điều kiện cho khách hàng có thể thanh toán hóa đơn qua các hình thức thanh toán không dùng tiền mặt.</p>\r\n\r\n<p style="text-align:justify">Thông qua hợp đồng này, LienVietPostBank sẽ triển khai dịch vụ thu hộ tiền điện tại 21 tỉnh, thành thuộc EVN SPC qua 3 kênh trên, đồng thời, cũng đang hướng tới mở rộng phạm vi hợp đồng để tiến tới triển khai dịch vụ thu hộ tiền điện trên toàn quốc trong thời gian sớm nhất.</p>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Theo Đầu tư tài chính</p>\r\n', '2015-04-05', 'LPB2.jpg', 1),
(25, 'NV0001', '60 năm Ngày truyền thống ngành Điện lực Việt Nam: Thêm niềm tin và tự hào cách mạng', 'Chặng đường 60 năm xây dựng và phát triển của ngành Điện Việt Nam luôn đặt dưới sự lãnh đạo toàn diện của Đảng và gắn bó hữu cơ với lịch sử các cuộc cách mạng giải phóng dân tộc, xây dựng và phát triển Tổ quốc. 60 năm qua, đội ngũ cán bộ đảng viên, công nhân viên chức lao động ngành Điện luôn thể hiện lòng trung thành với Tổ quốc, với Đảng và nhân dân, nỗ lực lao động sản xuất, đưa điện đến mọi miền đất nước, đảm bảo an ninh năng lượng quốc gia.', '<div class="baiviet" style="box-sizing: border-box; margin: 0px auto; line-height: 24px; color: rgb(0, 0, 0); font-family: ''Helvetica Neue'', Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px;">\r\n<p>Năm &nbsp;2014, là năm bản lề trong thực hiện kế hoạch 5 năm giai đoạn 2011 - 2015, cũng là năm diễn ra các hoạt động thi đua sôi nổi chào mừng Ngày truyền thống ngành Điện lực Việt Nam (21/12/1954 - 21/12/2014). Đảng ủy Tập đoàn Điện lực Việt Nam đã xây dựng các Chương trình hành động, bàn hành các Nghị quyết chuyên đề để lãnh đạo, chỉ đạo các tổ chức Đảng, chuyên môn, đoàn thể tập trung thực hiện thắng lợi nhiệm vụ trọng tâm trong sản xuất kinh doanh, đầu tư xây dựng… đảm bảo cung ứng đủ điện cho phát triển kinh tế xã hội, quốc phòng - an ninh và đời sống nhân dân. Chủ đề chính của năm 2014 là năm “Tối ưu hóa chi phí và Điện cho miền Nam”, đẩy mạnh tiến trình tái cơ cấu Tập đoàn và đổi mới quản trị doanh nghiệp để nâng cao hiệu quả sản xuất, kinh doanh.</p>\r\n\r\n<p style="text-align:justify">Để thực hiện tốt nhiệm vụ trên, Ban Thường vụ Đảng ủy, Hội đồng Thành viên và Ban Tổng giám đốc đã sớm dự báo, nhận định chính xác những thuận lợi, khó khăn để lãnh đạo, chỉ đạo quyết liệt thực hiện những nhiệm vụ đề ra. Đảng ủy Tập đoàn đã ban hành 3 Nghị quyết chuyên đề về công tác chuyên môn, 2 Chỉ thị quan trọng về việc thực hiện nhiệm vụ chính trị hướng tới kỷ niệm 60 năm truyền thống ngành.</p>\r\n\r\n<p style="text-align:justify">Kết thúc những tháng cuối cùng của năm 2014, với sự nỗ lực của trên 100 ngàn cán bộ, đảng viên, CNVC và người lao động, Tập đoàn đã cung cấp đủ điện, ổn định, an toàn phục vụ phát triển kinh tế - xã hội, quốc phòng - an ninh,&nbsp; Hệ thống điện được vận hành an toàn, tối ưu và có dự phòng.</p>\r\n\r\n<p style="text-align:justify">Năm 2014, EVN đã hoàn thành nhiều dự án nguồn và lưới điện quan trọng. Nổi bật là hoàn thành công trình xây dựng đường dây 500 kV mạch 3 (Pleiku – Mỹ Phước – Cầu Bông);&nbsp; Hoàn thành đóng điện dự án cáp ngầm đưa điện ra huyện đảo Phú Quốc (tỉnh Kiên Giang) vào tháng 3/2014 và đưa điện ra đảo Lý Sơn (tỉnh Quảng Ngãi) vào tháng 5/2014; hoàn thành phát điện vượt tiến độ 2 tổ máy Dự án Thủy điện Sông Bung 4… Đến hết tháng 10/2014, đã hoàn thành đóng điện 33 công trình lưới điện: 10 công trình 500 kV, 23 công trình 220 kV và khởi công 34 công trình lưới điện 500 - 220 kV. Đến nay, cả nước đã có 100% số huyện có điện (trong đó 5/12 huyện đảo được sử dụng điện lưới quốc gia gồm Vân Đồn, Cát Hải, Phú Quốc, Cô Tô và Lý Sơn). Đến nay cả nước đã có 100% số huyện có điện lưới và điện tại chỗ; 99,42% số xã và 97,83% số hộ dân nông thôn có điện lưới.</p>\r\n\r\n<p style="text-align:justify">Thực hiện Chỉ thị của Thủ tướng Chính phủ về việc đẩy mạnh tái cơ cấu doanh nghiệp nhà nước, Đảng ủy Tập đoàn đã ban hành Nghị quyết các đơn vị quyết liệt triển khai. Theo đó, đã hoàn thành thoái vốn tại Công ty Cổ phần Bất động sản Saigonvina và Công ty Cổ phần Bất động sản Điện lực miền Trung, 5 Tổng công ty Điện lực đã thực hiện thoái vốn tại 21 doanh nghiệp. Tổng giá trị thoái vốn của EVN và 5 Tổng công ty đạt 373,7 tỷ đồng.</p>\r\n\r\n<p style="text-align:justify">Để thực hiện tốt nhiệm vụ này có sự chỉ đạo quyết liệt của cấp ủy các cấp trong việc thực hiện các Nghị quyết của Đảng, sự đoàn kết nhất trí của toàn thể cán bộ, Đảng viên, CNVC và người lao động trong Tập đoàn. Các cấp ủy trong Đảng bộ đã chấp hành tốt chỉ đạo của cấp ủy cấp trên, thực hiện đúng nguyên tắc, Điều lệ, qui chế, qui định của Đảng, đưa Cuộc vận động học tập và làm theo tấm gương đạo đức Hồ Chí Minh theo Chỉ thị 03 của Bộ Chính trị đi vào chiều sâu, dần trở thành hoạt động thường xuyên, hàng ngày của cán bộ, đảng viên, CNVLĐ. Từ đó, năng lực lãnh đạo và sức chiến đấu của các tổ chức cơ sở Đảng trong toàn Đảng bộ không ngừng được nâng lên, dân chủ được phát huy, đoàn kết được tăng cường, kỷ luật, kỷ cương được giữ vững, đặc biệt là sau đợt kiểm điểm tự phê bình và phê bình theo tinh thần Nghị quyết Trung ương 4 (khóa XI) “Một số vấn đề cấp bách trong xây dựng Đảng hiện nay”.</p>\r\n\r\n<table align="center" cellpadding="10" cellspacing="1" style="background-color:transparent; border-collapse:collapse; border-spacing:0px; box-sizing:border-box; margin:0px auto; width:500px">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p><img alt="" src="http://cms.evn.com.vn/Portals/0/userfiles/XuanTien/2015/1/Picture%20426.jpg" style="border:medium none !important; box-sizing:border-box; height:364px; margin:0px auto; vertical-align:middle; width:550px" /></p>\r\n\r\n			<p style="text-align:center"><em><span style="font-size:11px">Cán bộ, đảng viên, công nhân viên ngành Điện luôn phấn đấu tốt mọi nhiệm vụ được đề ra - Ảnh Ngọc Tuấn</span></em></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p style="text-align:justify">Việc kiểm điểm theo tinh thần Nghị quyết Trung ương 4, đã góp phần tạo chuyển biến tốt về tư tưởng chính trị, đạo đức lối sống ở mỗi tổ chức đảng, mỗi cán bộ đảng viên ở tất cả các cơ quan đơn vị trong Đảng bộ, là cơ sở vững chắc đảm bảo nâng cao tinh thần trách nhiệm, ý thức tu dưỡng của mỗi tập thể và cá nhân, phấn đấu hoàn thành tốt nhiệm vụ mà Đảng, Chính phủ, nhân dân giao phó.</p>\r\n\r\n<p style="text-align:justify">Đối với những CBCNV Tập đoàn Điện lực Việt Nam, 60 năm qua là chặng đường đầy gian nan, thử thách, nhưng cũng đầy vinh quang, tự hào vì được đóng góp sức lực của mình cho sự phát triển của đất nước. Những thành quả đạt được là cơ sở, là tiền đề để Tập đoàn Điện lực Việt Nam tiếp tục đổi mới quản trị doanh nghiệp; xây dựng và quản lý tốt đội ngũ cán bộ, đảng viên, CNVC thực sự có kiến thức, trình độ, kỹ năng nghề vững vàng, đạo đức tốt; nâng cao sức cạnh tranh của Tập đoàn.</p>\r\n\r\n<p style="text-align:justify">Tự hào truyền thống 60 năm ngành Điện cách mạng Việt Nam, cán bộ, đảng viên, CNVC và người lao động tiếp tục nỗ lực phấn đấu, đoàn kết, gắn bó dưới sự lãnh đạo của Đảng, thực hiện thắng lợi các nhiệm vụ đề ra, xây dựng Tập đoàn Điện lực Việt Nam ngày càng phát triển, vững mạnh.</p>\r\n\r\n<table align="center" border="1" cellpadding="10" cellspacing="1" style="background-color:transparent; border-collapse:collapse; border-spacing:0px; box-sizing:border-box; margin:0px auto; width:500px">\r\n	<tbody>\r\n		<tr>\r\n			<td style="background-color:rgb(204, 204, 204); border-color:rgb(204, 204, 204); text-align:justify">Đảng bộ Tập đoàn Điện lực Việt Nam là đảng bộ cấp trên cơ sở gồm 16 tổ chức đảng trực thuộc, trong đó có 14 đảng bộ cơ sở và 2 chi bộ cơ sở. Tổng số đảng viên hiện đang sinh hoạt là 2.894 đảng viên sinh hoạt tại 221 chi bộ trên phạm vi toàn quốc.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>&nbsp;</p>\r\n</div>\r\n\r\n<p style="text-align:start">&nbsp;</p>\r\n\r\n<p style="text-align:right">Theo TCĐL Chuyên đề QL&amp;HN</p>\r\n', '2015-05-13', 'duadiennt.JPG', 1);

-- --------------------------------------------------------

--
-- Table structure for table `trambienap`
--

CREATE TABLE IF NOT EXISTS `trambienap` (
  `matram` int(11) NOT NULL AUTO_INCREMENT,
  `tentram` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ghichu` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`matram`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `trambienap`
--

INSERT INTO `trambienap` (`matram`, `tentram`, `ghichu`) VALUES
(1, 'Trạm biến áp khu vực 1', 'Gần chợ An Hòa'),
(2, 'Trạm biến áp khu vực 4', NULL),
(3, 'Trạm biến áp khu vực An Hòa', NULL),
(4, 'Trạm biến áp khu vực 7', NULL),
(5, 'Trạm biến áp khu vực 3', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ykienphanhoi`
--

CREATE TABLE IF NOT EXISTS `ykienphanhoi` (
  `maykien` int(11) NOT NULL AUTO_INCREMENT,
  `makhachhang` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `noidung` text COLLATE utf8_unicode_ci,
  `ngaydang` date DEFAULT NULL,
  `noidungtraloi` text COLLATE utf8_unicode_ci,
  `ngaytraloi` date DEFAULT NULL,
  `datraloi` tinyint(1) DEFAULT NULL,
  `nhanvientl` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `trangthai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`maykien`),
  KEY `fk_relationship_11` (`makhachhang`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `ykienphanhoi`
--

INSERT INTO `ykienphanhoi` (`maykien`, `makhachhang`, `noidung`, `ngaydang`, `noidungtraloi`, `ngaytraloi`, `datraloi`, `nhanvientl`, `trangthai`) VALUES
(1, 'KH00001', 'Thưa Quý công ty.\n\nXin cho tôi biết, giá bán điện của điện lực áp dụng để phục vụ hội chợ, lễ hội là bao nhiêu?\n\nTôi xin chân thành cám ơn.', '2015-05-13', 'Kính thưa Quý khách.\r\n\r\nĐiện sử dụng phục vụ hội chợ áp dụng giá điện cho kinh doanh. Hiện nay đang áp dụng biểu giá điện theo Quyết định số 4887/QĐ-BCT, giá điện cho kinh doanh ở cấp điện áp dưới 6kV là:\r\n\r\n- Đối với khách hàng thuộc đối tượng 3 giá:\r\n\r\nGiờ bình thường: 2188đ/kWh\r\n\r\nGiờ thấp điểm: 1343 đ/kWh\r\n\r\nGiờ cao điểm: 3742 đ/kWh\r\n\r\n- Đối với khách hàng không thuộc đối tượng 3 giá thì áp dụng giá giờ bình thường.\r\n\r\nTrân trọng.', '2015-05-13', 1, 'NV0002', 1),
(2, 'KH00005', 'Kính gửi EVN.\n\nXin cho em hỏi: Tiền công suất phản kháng là gì? Từ trước đến nay Công ty em chỉ nhận giấy báo điện điện, nay lại có giấy báo tiền công suất phản kháng tiền điện nữa.\n\nEm không hiểu, có nên đóng hay đóng hay không và vì sao phải đóng. (vì những tháng trước không đóng tiền này)\n\nMong anh/ chị giải đáp giúp em.\n\nEm xin chân thành cám ơn.', '2015-05-13', 'Kính gửi Quý khách hàng!\nTiền mua công suất phản kháng là số tiền bên mua điện phải trả cho bên bán điện để bù đắp các khoản chi phí phát sinh thêm do bên mua điện sử dụng quá lượng công suất phản kháng quy định. Bên mua điện là tổ chức, cá nhân có ký hợp đồng mua điện với bên bán điện để sản xuất, kinh doanh, dịch vụ hoặc bán lại cho tổ chức, cá nhân khác có công suất sử dụng cực đại đăng ký tại hợp đồng mua bán điện từ 80 kW trở lên hoặc máy biến áp có dung lượng từ 100 kVA trở lên  và có hệ số công suất cos phi < 0,85 phải mua công suất phản kháng.\n\nHệ số công suất cos phi được tính theo chu kỳ ghi chỉ số công tơ như chu kỳ tính tiền điện. Trong kỳ ghi chỉ số nếu cos phi < 0,85 khách hàng mới phải mua công suất phản kháng. Tiền mua công suất phản kháng bằng tiền điện nhân với hệ số k (tương ứng với cos phi ).\n\nBạn có thể tìm hiểu thêm Thông tư số 07/2006/TT-BCN (hết hiệu lực kể từ ngày 10/12/2014),  Thông tư số 15/2014/TT-BCT (có hiệu lực từ ngày 10/12/2014) để biết thêm chi tiết.  \n\nTrân trọng!', '2015-05-14', 1, 'NV0002', 1),
(3, 'KH00011', 'Kính thưa Quý công ty.\n\nHiện tại nhà tôi có 02 đồng hồ điện, 01 cái áp giá kinh doanh, 01 cái áp giá sinh hoạt. Nay tôi muốn chuyển đồng hồ áp giá sinh hoạt sang giá kinh doanh luôn có được không?\n\nTôi xin cám ơn', '2015-05-13', 'Bạn Hùng thân mến.\nTheo quy định, khách hàng thay đổi mục đích sử dụng điện dẫn đến thay đổi giá điện phải thông báo cho bên bán điện trước 15 ngày. Trường hợp của khách hàng nếu không sử dụng điện cho mục đích sinh hoạt mà chuyển sang mục đích kinh doanh, có mức giá cao hơn mức giá sinh hoạt khách hàng cần phải thông báo cho điện lực để áp giá kinh doanh. Nếu không thông báo, sẽ bị bồi thường và phạt do hành vi sử dụng điện sai mục đích có mức giá cao hơn mức giá đã thoả thuận trong hợp đồng.\n\nTrân trọng.', '2015-05-15', 1, 'NV0002', 1),
(4, 'KH00007', 'Kính gửi EVN.\n\nXin cho em hỏi: Quy định về giá điện cho các trường đại học.\n\nMong anh/ chị giải đáp giúp em.\n\nEm xin chân thành cám ơn.', '2015-05-13', 'Thưa Quý khách hàng!\n\nGiá bán điện cho trường đại học thuộc đối tượng hành chính sự nghiệp, có mức giá 1.494 đ/kWh đối với cấp điện áp từ 6 kV trở lên và 1.554 đ/kWh đối với cấp điện áp dưới 6 kV.\n\nTrân trọng', '2015-05-13', 1, 'NV0002', 1),
(5, 'KH00004', 'Thưa Quý công ty.\n\nTôi muốn hỏi: Tại sao nhân viên điện lực lại không đến thu tiền điện tại nhà nữa, mà khách hàng sử dụng điện phải tự đi nộp tiền? Tôi thấy điều này không hợp lý tí nào cả. Mong điện lực xem xét.\n\nVà xin cho tôi biết, văn bản nào yêu cầu khách hàng phải tự đi nộp tiền?\n\nCảm ơn!', '2015-05-13', 'Theo quy định của Luật Điện lực và các văn bản hướng dẫn thi hành: “Tiền điện được thanh toán tại trụ sở, nơi ở của bên mua điện hoặc tại địa điểm thuận lợi do hai bên thoả thuận trong hợp đồng mua bán điện. Khuyến khích thanh toán tiền điện qua hệ thống ngân hàng, tại địa điểm thu tiền điện của bên bán điện”.\\\n\nHình thức thu tiền tại nhà có ưu điểm thuận tiện cho khách hàng không phải đi đến quầy trả tiền nhưng có rất nhiều nhược điểm: Thu trong giờ hành chính thì năng suất đạt thấp; khách hàng đi vắng hoặc không gặp được người có trách nhiệm trả tiền, thu ngân phải đi hơn 02 lần mới thu được tiền, thậm chí còn không thu được. Để thu được tiền thu ngân viên thường phải đi thu vào buổi tối nên việc bảo quản tiền gặp khó khăn (dễ bị cướp hoặc bị tiền giả). Ở một số khu vực, việc thu tại nhà cũng là hình thức làm phiền khách hàng. Bên cạnh đó, một số trường hợp kẻ gian đóng giả nhân viên điện lực, gây mất an toàn cho khách hàng.\n\nĐể tăng năng suất lao động với mục tiêu không tăng lao động trong khâu thu tiền, giảm chi phí trong khâu bán điện, tạo điều kiện cho khách hàng có thể lựa chọn nhiều hình thức thanh toán khác nhau, từ năm 2003 các điện lực đã phát triển nhiều hình thức thu khác như: Thu tiền tại điểm thu, thuê dịch vụ bán lẻ điện năng, nhờ ngân hàng, bưu điện thu hộ, thu qua thẻ và các kênh thanh toán điện tử như: ATM, tin nhắn, internet,… Thực hiện chủ trương thanh toán không dùng tiền mặt của Chính phủ, các bộ, ngành liên quan đã đầu tư cơ sở hạ tầng, xây dựng khung chính sách, sửa đổi các quy định liên quan... để thực hiện chủ trương này. Bên cạnh việc triển khai hóa đơn điện tử, EVN đang tiếp tục đầu tư cơ sở hạ tầng, mở rộng hợp tác với nhiều ngân hàng triển khai dự án thanh toán tiền điện qua ngân hàng thông qua nhiều hình thức (chuyển khoản, ATM, internet, mobile, thẻ thanh toán, ...).\n\nEVN mong muốn khách hàng ủng hộ và tham gia tích cực hình thức thanh toán này.\n\nTrân trọng.', '2015-05-16', 1, 'NV0002', 1),
(6, 'KH00009', 'Thưa Quý công ty.\n\nXin cho tôi biết, giá bán điện ký túc xá sinh viên của một trường đại học là bao nhiêu, có được ưu tiên gì không?\n\nTôi xin chân thành cám ơn.', '2015-05-13', 'Thưa Quý khách.\n\nTheo quy định của Thông tư số 16/2014/TT-BCT, Bên mua điện sử dụng vào mục đích sinh hoạt cho nhà ở tập thể của cán bộ, công nhân viên chức, lực lượng vũ trang, nhà ở của người tu hành; ký túc xá học sinh, sinh viên áp dụng như sau:\n\na) Trường hợp có thể kê khai được số người thì cứ 4 người (căn cứ vào sổ tạm trú hoặc danh sách cán bộ, chiến sỹ có xác nhận của thủ trưởng đơn vị đối với lực lượng vũ trang) được tính là một hộ sử dụng điện để áp dụng giá bán lẻ điện sinh hoạt;\n\nb) Trường hợp không thể kê khai được số người thì áp dụng giá bán lẻ điện sinh hoạt của bậc 3: từ 101 - 200 kWh cho toàn bộ sản lượng điện đo đếm được tại công tơ. (Theo quy định hiện hành là 1.660 đ/kWh)\n\nBạn có thể truy cập trang web: www.evn.com.vn để tìm hiểu các văn bản quy định về giá điện.\n\nTrân trọng.', '2015-05-16', 1, 'NV0002', 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `congtodien`
--
ALTER TABLE `congtodien`
  ADD CONSTRAINT `fk_relationship_3` FOREIGN KEY (`mamucdich`) REFERENCES `mucdichsudung` (`mamucdich`),
  ADD CONSTRAINT `fk_relationship_8` FOREIGN KEY (`makhachhang`) REFERENCES `khachhang` (`makhachhang`),
  ADD CONSTRAINT `fk_thuoc` FOREIGN KEY (`matram`) REFERENCES `trambienap` (`matram`);

--
-- Constraints for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `fk_relationship_5` FOREIGN KEY (`macongto`) REFERENCES `congtodien` (`macongto`),
  ADD CONSTRAINT `fk_relationship_6` FOREIGN KEY (`manhanvien`) REFERENCES `nhanvien` (`manhanvien`);

--
-- Constraints for table `hoadonchitiet`
--
ALTER TABLE `hoadonchitiet`
  ADD CONSTRAINT `fk_relationship_13` FOREIGN KEY (`mahoadon`) REFERENCES `hoadon` (`mahoadon`);

--
-- Constraints for table `mucdichsudung`
--
ALTER TABLE `mucdichsudung`
  ADD CONSTRAINT `fk_relationship_9` FOREIGN KEY (`manhommdsd`) REFERENCES `nhommucdichsd` (`manhommdsd`);

--
-- Constraints for table `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD CONSTRAINT `fk_relationship_2` FOREIGN KEY (`maphongban`) REFERENCES `phongban` (`maphongban`);

--
-- Constraints for table `phanmucgia`
--
ALTER TABLE `phanmucgia`
  ADD CONSTRAINT `fk_relationship_7` FOREIGN KEY (`mamucdich`) REFERENCES `mucdichsudung` (`mamucdich`);

--
-- Constraints for table `phanquyen`
--
ALTER TABLE `phanquyen`
  ADD CONSTRAINT `fk_phanquyen` FOREIGN KEY (`maquyen`) REFERENCES `quyensudung` (`maquyen`),
  ADD CONSTRAINT `fk_phanquyen2` FOREIGN KEY (`manhanvien`) REFERENCES `nhanvien` (`manhanvien`);

--
-- Constraints for table `tintuc`
--
ALTER TABLE `tintuc`
  ADD CONSTRAINT `fk_relationship_12` FOREIGN KEY (`manhanvien`) REFERENCES `nhanvien` (`manhanvien`);

--
-- Constraints for table `ykienphanhoi`
--
ALTER TABLE `ykienphanhoi`
  ADD CONSTRAINT `fk_relationship_11` FOREIGN KEY (`makhachhang`) REFERENCES `khachhang` (`makhachhang`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

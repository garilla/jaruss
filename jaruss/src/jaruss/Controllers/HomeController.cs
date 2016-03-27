using Microsoft.AspNet.Mvc;

namespace jaruss.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            if (!HttpContext.Request.Path.Value.Contains("index"))
                return RedirectToAction("Index");

            return View();
        }

        public IActionResult Services()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult Faq()
        {
            return View();
        }

        public IActionResult ForSale()
        {
            return View();
        }
    }
}
